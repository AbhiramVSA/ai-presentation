import RLSlideFrame from './RLSlideFrame';
import { RLPanel } from './RLPrimitives';

const leftReferences = [
  'Mnih et al. Asynchronous Methods for Deep Reinforcement Learning. ICML, 2016.',
  'Schulman et al. High-Dimensional Continuous Control Using Generalized Advantage Estimation. arXiv, 2016.',
  'Bellemare, Dabney, and Munos. A Distributional Perspective on Reinforcement Learning. ICML, 2017.',
  'Dabney et al. Distributional Reinforcement Learning with Quantile Regression. AAAI, 2018.',
];

const rightReferences = [
  'OpenAI. Introducing GPT-5 for developers. August 7, 2025.',
  'OpenAI. Introducing GPT-5.1 for developers. November 13, 2025.',
  'Anthropic. Model System Cards. Accessed April 22, 2026.',
  'Anthropic. Claude Sonnet 4.5 System Card. September 2025.',
];

function RefColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <RLPanel padding="clamp(18px, 1.5vw, 28px)">
      <div
        style={{
          fontSize: 'clamp(11px, 0.82vw, 14px)',
          opacity: 0.58,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '0.8rem',
        }}
      >
        {title}
      </div>
      <div style={{ display: 'grid', gap: '0.8rem' }}>
        {items.map((item) => (
          <div key={item} className="flex items-start" style={{ gap: '0.75rem' }}>
            <span
              style={{
                width: '0.42rem',
                height: '0.42rem',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.72)',
                marginTop: '0.52rem',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 'clamp(11px, 0.84vw, 15px)', opacity: 0.86, lineHeight: 1.48 }}>{item}</span>
          </div>
        ))}
      </div>
    </RLPanel>
  );
}

export default function RLReferencesSlide() {
  return (
    <RLSlideFrame
      slideNumber="12"
      section="References"
      title="Research and model references"
      subtitle="The route now mirrors the revised paper rather than the earlier speculative presentation. These are the core references behind the mathematical formulation and the frontier-model positioning."
      backgroundSrc="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8"
      footerLabel="References"
    >
      <div className="grid h-full w-full grid-cols-2 gap-5">
        <RefColumn title="Reinforcement learning and distributional RL" items={leftReferences} />
        <RefColumn title="Frontier model sources used in the paper" items={rightReferences} />
      </div>
    </RLSlideFrame>
  );
}
