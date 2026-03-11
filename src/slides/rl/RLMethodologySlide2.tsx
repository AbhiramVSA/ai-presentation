import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const architecturePoints = [
  {
    label: 'MDP Formulation',
    desc: 'States = conversation at each turn, Actions = conversion probability estimates, Rewards = prediction accuracy. Models sales as a sequential decision process.',
  },
  {
    label: 'State Encoder',
    desc: 'Processes OpenAI text-embedding-3-large 3072-dim vectors combined with hand-crafted sales features (engagement signals, objection detection, technique identification).',
  },
  {
    label: 'Policy Network',
    desc: 'Estimates conversion probability from current state with strong policy regularization, conservative updates, and adaptive learning rates.',
  },
  {
    label: 'Value Network',
    desc: 'Estimates expected cumulative reward to stabilize training. Uses distribution-aware learning to handle uncertainty in conversation outcomes.',
  },
  {
    label: 'Meta-Learning Module',
    desc: 'Assesses prediction confidence via training data similarity, ensemble consistency, pattern recognition, and novel element identification. Knows when it doesn\'t know.',
  },
  {
    label: 'Orchestration Layer',
    desc: 'Directed graph architecture for multi-node context retrieval — high-performance vector search, caching layers, state-based workflow orchestration, and dynamic prompt engineering.',
  },
];

export default function RLMethodologySlide2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>06</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Methodology
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            RL Architecture & Meta-Learning
          </p>
        </div>

        {/* Architecture cards — 2x3 grid */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ marginTop: '1.5%', gap: 'clamp(8px, 0.7vw, 12px)' }}
        >
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="flex"
              style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}
            >
              {architecturePoints.slice(row * 2, row * 2 + 2).map((item) => (
                <LiquidGlassCard
                  key={item.label}
                  className="flex-1"
                  style={{ padding: 'clamp(12px, 1.2vw, 22px) clamp(14px, 1.4vw, 24px)' }}
                >
                  <h3 style={{ fontSize: 'clamp(12px, 1vw, 18px)', fontWeight: 700, marginBottom: 'clamp(4px, 0.35vw, 8px)' }}>
                    {item.label}
                  </h3>
                  <p style={{ fontSize: 'clamp(10px, 0.8vw, 15px)', opacity: 0.8, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </LiquidGlassCard>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Methodology (2/3)</span>
        </div>
      </div>
    </div>
  );
}
