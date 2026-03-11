import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const points = [
  'Current sales AI tools (Kapa.ai, Mendable, Inkeep) rely on LLMs with basic RAG — they cannot predict conversion probability or provide strategic real-time guidance.',
  'SalesRLAgent treats sales conversations as sequential decision problems, training a specialized RL model on a hybrid dataset: 70% synthetic conversations generated via GPT-5 and 30% real-world data from the goendalf666/sales-conversations corpus on HuggingFace.',
  'The system uses OpenAI text-embedding-3-large (3072 dimensions), turn-by-turn state tracking, and meta-learning to estimate its own prediction confidence.',
  'Based on prior work by Henderson et al. (2018) and Takanobu et al. (2019), we project 91–95% accuracy in conversion prediction — a 25–30% improvement over LLM-only baselines, with sub-100ms inference latency.',
  'Projected real-world impact estimates a 35–45% uplift in conversion rates and 18–25% reduction in sales cycle length, informed by ablation patterns observed in RL dialogue policy literature.',
];

export default function RLAbstractSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>02</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Abstract
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Problem, Approach & Key Results
          </p>
        </div>

        {/* Points */}
        <div className="flex-1 flex flex-col justify-center" style={{ marginTop: '1%' }}>
          <LiquidGlassCard style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}>
            <ul
              className="list-none"
              style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 1.4vw, 26px)' }}
            >
              {points.map((point, i) => (
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
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Abstract</span>
        </div>
      </div>
    </div>
  );
}
