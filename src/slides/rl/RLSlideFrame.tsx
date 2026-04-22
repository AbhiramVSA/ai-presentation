import type { CSSProperties, ReactNode } from 'react';
import VideoBackground from '../../components/VideoBackground';

interface RLSlideFrameProps {
  slideNumber: string;
  section: string;
  title: string;
  subtitle?: string;
  backgroundSrc?: string;
  children: ReactNode;
  footerLabel?: string;
  titleWidth?: string;
  contentStyle?: CSSProperties;
}

const defaultBackground =
  'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

export default function RLSlideFrame({
  slideNumber,
  section,
  title,
  subtitle,
  backgroundSrc = defaultBackground,
  children,
  footerLabel,
  titleWidth = '78%',
  contentStyle,
}: RLSlideFrameProps) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src={backgroundSrc} />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(3,10,20,0.76), rgba(9,16,32,0.66) 36%, rgba(28,9,20,0.58) 100%)',
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col" style={{ padding: '3.8% 5.1%' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              style={{
                fontSize: 'clamp(16px, 1.35vw, 26px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              SalesRLAgent
            </span>
            <span
              style={{
                fontSize: 'clamp(10px, 0.82vw, 15px)',
                opacity: 0.58,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              {section}
            </span>
          </div>
          <span style={{ fontSize: 'clamp(14px, 1.1vw, 22px)', opacity: 0.6, fontWeight: 600 }}>
            {slideNumber}
          </span>
        </div>

        <div style={{ marginTop: '1.5%', width: titleWidth }}>
          <h1
            style={{
              fontSize: 'clamp(28px, 3.2vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              style={{
                fontSize: 'clamp(12px, 1vw, 18px)',
                opacity: 0.72,
                marginTop: '0.7%',
                lineHeight: 1.4,
                maxWidth: '95%',
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex-1" style={{ marginTop: '1.6%', ...contentStyle }}>
          {children}
        </div>

        <div className="flex items-center justify-between" style={{ marginTop: '1.2%' }}>
          <span style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.44 }}>
            Abhiram Venkat Sai Adabala · Shikhar Veer · Ashok Rupalli
          </span>
          <span style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.56 }}>
            {footerLabel ?? section}
          </span>
        </div>
      </div>
    </div>
  );
}
