import VideoBackground from '../../components/VideoBackground';

export default function RLCoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700, letterSpacing: '-0.01em' }}>
            SalesRLAgent
          </span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Reinforcement Learning
          </span>
        </div>

        {/* Center content */}
        <div
          className="flex flex-col items-center justify-center flex-1 text-center"
          style={{ marginTop: '-3%' }}
        >
          <p style={{ fontSize: 'clamp(13px, 1.1vw, 22px)', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5%' }}>
            Research Paper Presentation
          </p>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '80%',
            }}
          >
            SalesRLAgent
          </h1>
          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 28px)',
              opacity: 0.85,
              marginTop: '1.5%',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              maxWidth: '70%',
              lineHeight: 1.35,
            }}
          >
            A Reinforcement Learning Approach for Real-Time Sales Conversion Prediction and Optimization
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
              Nandakishor M
            </p>
            <p style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', opacity: 0.5 }}>
              Deepmost Innovations — nandakishor@deepmostai.com
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
