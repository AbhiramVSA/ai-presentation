import RLSlideFrame from './RLSlideFrame';
import { BulletList, Metric, RLPanel } from './RLPrimitives';

export default function RLAbstractSlide() {
  return (
    <RLSlideFrame
      slideNumber="02"
      section="Executive Summary"
      title="What the paper actually claims"
      subtitle="The contribution is not a generic sales-AI system. It is a risk-sensitive reinforcement learning controller with a distributional critic and a clean comparison frame against frozen frontier models."
      footerLabel="Abstract"
    >
      <div className="grid h-full w-full grid-cols-[1.2fr_0.95fr] gap-5">
        <RLPanel padding="clamp(18px, 1.55vw, 30px)">
          <BulletList
            items={[
              <span>
                Sales dialogue is modeled as a <strong>partially observed Markov decision process</strong> with latent
                trust, urgency, fit, budget readiness, objection load, fatigue, and stage progression.
              </span>,
              <span>
                The critic learns <strong>a return distribution</strong> rather than only a mean value, using quantiles
                to estimate both expected reward and lower-tail risk.
              </span>,
              <span>
                The actor update is <strong>risk-sensitive</strong>: the policy is penalized in states where critic
                dispersion is high, making it less likely to exploit brittle dialogue trajectories.
              </span>,
              <span>
                The reproducible benchmark shows a meaningful trade-off: the scalar baseline gets higher mean reward,
                while the distributional controller reduces volatility and improves <strong>CVaR</strong>.
              </span>,
              <span>
                Frontier models such as <strong>GPT-5</strong>, <strong>GPT-5.1</strong>, and
                <strong> Claude Sonnet 4.5</strong> are treated as strong prompted modules, not as directly
                reward-optimized sales policies.
              </span>,
            ]}
          />
        </RLPanel>

        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.55vw, 28px)">
            <div className="flex gap-5">
              <Metric value="-22.2%" label="improvement in worst-decile loss magnitude via CVaR shift" accent="#bbf7d0" />
              <Metric value="-9.3%" label="reduction in return standard deviation" accent="#bfdbfe" />
            </div>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.55vw, 28px)">
            <div
              style={{
                fontSize: 'clamp(11px, 0.84vw, 14px)',
                opacity: 0.56,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.8rem',
              }}
            >
              Core takeaway
            </div>
            <p
              style={{
                fontSize: 'clamp(14px, 1.04vw, 18px)',
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              The result is deliberately nuanced. Distributional RL does not dominate every scalar metric in this
              simulator. It yields a <strong>safer controller</strong>, which is exactly the point for production sales
              workflows where bad lower-tail interactions are expensive.
            </p>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.55vw, 28px)">
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {[
                'paper rewritten with full equations, architecture diagram, tables, and figures',
                'A100-ready notebook included for training and checkpointing',
                'benchmark artifacts generated from runnable local code',
              ].map((line) => (
                <div key={line} style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', opacity: 0.86, lineHeight: 1.45 }}>
                  {line}
                </div>
              ))}
            </div>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
