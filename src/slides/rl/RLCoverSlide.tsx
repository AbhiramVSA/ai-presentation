import RLSlideFrame from './RLSlideFrame';
import { Metric, RLPanel } from './RLPrimitives';

export default function RLCoverSlide() {
  return (
    <RLSlideFrame
      slideNumber="01"
      section="Research Presentation"
      title="Risk-Sensitive Distributional Actor-Critic for Sales Dialogue Control"
      subtitle="A mathematically grounded benchmark against frontier prompted controllers, with reproducible training artifacts and A100-ready training scripts."
      backgroundSrc="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8"
      footerLabel="Cover"
      titleWidth="82%"
      contentStyle={{ display: 'flex', alignItems: 'stretch' }}
    >
      <div className="grid h-full w-full grid-cols-[1.4fr_0.9fr] gap-5">
        <RLPanel padding="clamp(26px, 2vw, 34px)" className="h-full">
          <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ maxWidth: '82%' }}>
              <div
                style={{
                  fontSize: 'clamp(11px, 0.78vw, 14px)',
                  opacity: 0.56,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                Reinforcement Learning for Revenue Workflows
              </div>
              <p
                style={{
                  fontSize: 'clamp(13px, 0.92vw, 17px)',
                  opacity: 0.88,
                  lineHeight: 1.72,
                  marginTop: '1.05rem',
                }}
              >
                The paper reframes sales conversations as a partially observed control problem. The key move is to
                optimize a policy against long-horizon sales return while explicitly modeling downside risk with a
                quantile critic instead of collapsing all future dialogue outcomes into a single scalar value.
              </p>
            </div>

            <div
              className="grid grid-cols-3"
              style={{
                gap: 'clamp(18px, 1.5vw, 28px)',
                marginTop: 'auto',
                paddingTop: 'clamp(18px, 1.6vw, 28px)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <Metric value="POMDP" label="formal problem setup for latent buyer state and noisy observations" />
              <Metric value="31 Q" label="quantiles in the distributional critic used in the released benchmark" accent="#dbeafe" />
              <Metric value="A100" label="training scripts included for scalable checkpoints and evaluation" accent="#fde68a" />
            </div>
          </div>
        </RLPanel>

        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <div style={{ fontSize: 'clamp(11px, 0.8vw, 14px)', opacity: 0.58, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Authors
            </div>
            <div style={{ marginTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <div style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', fontWeight: 700 }}>Abhiram Venkat Sai Adabala</div>
              <div style={{ fontSize: 'clamp(15px, 1.12vw, 21px)', opacity: 0.86 }}>Shikhar Veeramachineni</div>
              <div style={{ fontSize: 'clamp(15px, 1.12vw, 21px)', opacity: 0.86 }}>Ashok Jupally</div>
            </div>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <div style={{ fontSize: 'clamp(11px, 0.8vw, 14px)', opacity: 0.58, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Route Scope
            </div>
            <div style={{ marginTop: '0.85rem', display: 'grid', gap: '0.7rem' }}>
              {[
                'formal mathematical setup',
                'risk-sensitive policy objective',
                'architecture and training system',
                'benchmark results and frontier-model framing',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: 'clamp(12px, 0.94vw, 17px)',
                    opacity: 0.88,
                    lineHeight: 1.45,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
