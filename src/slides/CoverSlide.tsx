import VideoBackground from '../components/VideoBackground';

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700, letterSpacing: '-0.01em' }}>
            Bantr
          </span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
        </div>

        {/* Center content */}
        <div
          className="flex flex-col items-center justify-center flex-1 text-center"
          style={{ marginTop: '-3%' }}
        >
          <p style={{ fontSize: 'clamp(13px, 1.1vw, 22px)', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5%' }}>
            Research Project Presentation
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 80px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Bantr
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.6vw, 32px)',
              opacity: 0.85,
              marginTop: '1%',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            AI-Powered Real-Time Voice Debate Platform
          </p>

          <div
            style={{
              marginTop: '5%',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(4px, 0.4vw, 8px)',
            }}
          >
            <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7 }}>
              Abhiram · Ishita · Pavan · Shreya
            </p>
            <p style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', opacity: 0.5 }}>
              Applications of AI — 2026
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full">
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.5 }}>01</span>
        </div>
      </div>
    </div>
  );
}
