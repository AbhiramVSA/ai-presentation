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
            'linear-gradient(135deg, rgba(3,10,20,0.86), rgba(9,16,32,0.78) 40%, rgba(26,10,22,0.72) 100%)',
        }}
      />

      <div
        className="relative z-10 flex h-full w-full flex-col"
        style={{ padding: '26px 54px 28px', gap: '14px' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0',
              }}
            >
              SalesRLAgent
            </span>
            <span
              style={{
                fontSize: '12px',
                opacity: 0.58,
                textTransform: 'uppercase',
                letterSpacing: '0',
              }}
            >
              {section}
            </span>
          </div>
          <span style={{ fontSize: '18px', opacity: 0.6, fontWeight: 600 }}>
            {slideNumber}
          </span>
        </div>

        <div style={{ width: titleWidth }}>
          <h1
            style={{
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '0',
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              style={{
                fontSize: '15px',
                opacity: 0.72,
                marginTop: '8px',
                lineHeight: 1.4,
                maxWidth: '95%',
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="min-h-0 flex-1" style={contentStyle}>
          {children}
        </div>

        <div className="flex items-center justify-between">
          <span style={{ fontSize: '12px', opacity: 0.44 }}>
            Abhiram Venkat Sai Adabala · Shikhar Veeramachineni · Ashok Jupally
          </span>
          <span style={{ fontSize: '12px', opacity: 0.56 }}>
            {footerLabel ?? section}
          </span>
        </div>
      </div>
    </div>
  );
}
