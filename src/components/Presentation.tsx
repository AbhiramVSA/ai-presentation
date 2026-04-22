import { useState, useEffect, useCallback, useRef, type ReactElement } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

interface PresentationProps {
  slides: ReactElement[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [transitioning, setTransitioning] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;

  const resetHideTimer = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000);
  }, []);

  const goTo = useCallback(
    (next: number, dir: 'next' | 'prev') => {
      if (transitioning || next < 0 || next >= total) return;
      setDirection(dir);
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(next);
        setTransitioning(false);
      }, 500);
    },
    [transitioning, total],
  );

  const goNext = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, toggleFullscreen]);

  useEffect(() => {
    const onMove = () => resetHideTimer();
    window.addEventListener('mousemove', onMove);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [resetHideTimer]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black"
      style={{ cursor: controlsVisible ? 'default' : 'none' }}
    >
      {slides.map((slide, i) => {
        const isActive = i === current && !transitioning;
        const isLeaving = transitioning && i === current;
        const isEntering =
          transitioning &&
          ((direction === 'next' && i === current + 1) ||
            (direction === 'prev' && i === current - 1));

        let opacity = 0;
        let scale = 1;

        if (isActive) {
          opacity = 1;
          scale = 1;
        } else if (isLeaving) {
          opacity = 0;
          scale = direction === 'next' ? 0.95 : 1.05;
        } else if (isEntering) {
          opacity = 1;
          scale = 1;
        } else if (i < current) {
          opacity = 0;
          scale = 0.95;
        } else {
          opacity = 0;
          scale = 1.05;
        }

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity,
              transform: `scale(${scale})`,
              transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
              pointerEvents: i === current && !transitioning ? 'auto' : 'none',
              zIndex: i === current ? 1 : 0,
            }}
          >
            {slide}
          </div>
        );
      })}

      {/* Keyboard hint */}
      <div
        className="absolute top-4 right-6 z-50"
        style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.4)',
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          pointerEvents: 'none',
        }}
      >
        ← → Navigate · F Fullscreen
      </div>

      {/* Bottom nav */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: '0 24px 16px',
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          pointerEvents: controlsVisible ? 'auto' : 'none',
        }}
      >
        {/* Slide counter */}
        <span
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '48px',
          }}
        >
          {current + 1} / {total}
        </span>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== current) goTo(i, i > current ? 'next' : 'prev');
              }}
              className="border-none outline-none cursor-pointer p-0"
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="border-none outline-none cursor-pointer flex items-center justify-center rounded-lg"
            style={{
              width: '32px',
              height: '32px',
              background: 'transparent',
              color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              transition: 'color 200ms, background 200ms',
            }}
            onMouseEnter={(e) => {
              if (current > 0) {
                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            disabled={current === total - 1}
            className="border-none outline-none cursor-pointer flex items-center justify-center rounded-lg"
            style={{
              width: '32px',
              height: '32px',
              background: 'transparent',
              color: current === total - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              transition: 'color 200ms, background 200ms',
            }}
            onMouseEnter={(e) => {
              if (current < total - 1) {
                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = current === total - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <ChevronRight size={18} />
          </button>

          <div
            style={{
              width: '1px',
              height: '20px',
              background: 'rgba(255,255,255,0.15)',
              margin: '0 4px',
            }}
          />

          <button
            onClick={toggleFullscreen}
            className="border-none outline-none cursor-pointer flex items-center justify-center rounded-lg"
            style={{
              width: '32px',
              height: '32px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.5)',
              transition: 'color 200ms, background 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
