import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const contributions = [
  'A reinforcement learning architecture specifically designed for sales conversation analysis and real-time conversion prediction.',
  'A synthetic data generation pipeline leveraging GPT-4O to create 1.2M diverse, realistic sales conversations across 15 industries.',
  'Novel state representation techniques using Azure OpenAI embeddings (3072 dimensions) combined with sales-specific feature engineering.',
  'A meta-learning approach enabling the system to express calibrated confidence based on conversation similarity to training data.',
  'Integration mechanisms providing real-time overlay guidance within CRM platforms (Salesforce, HubSpot) and communication tools (Zoom, Teams).',
  'Extensive evaluation demonstrating 96.7% prediction accuracy and 43.2% real-world conversion rate improvement over 90 days.',
];

export default function RLIntroSlide2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>04</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Introduction
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Key Contributions of SalesRLAgent
          </p>
        </div>

        {/* Points */}
        <div className="flex-1 flex flex-col justify-center" style={{ marginTop: '1%' }}>
          <LiquidGlassCard style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}>
            <ul
              className="list-none"
              style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.2vw, 24px)' }}
            >
              {contributions.map((point, i) => (
                <li key={i} className="flex items-start" style={{ gap: 'clamp(12px, 1vw, 20px)' }}>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 'clamp(26px, 2vw, 36px)',
                      height: 'clamp(26px, 2vw, 36px)',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      fontSize: 'clamp(11px, 0.8vw, 14px)',
                      fontWeight: 700,
                      marginTop: 'clamp(2px, 0.15vw, 4px)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.9, lineHeight: 1.6 }}>
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </LiquidGlassCard>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Introduction (2/2)</span>
        </div>
      </div>
    </div>
  );
}
