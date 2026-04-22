import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, RLPanel } from './RLPrimitives';

export default function RLMethodologySlide1() {
  return (
    <RLSlideFrame
      slideNumber="05"
      section="Mathematical Core"
      title="Distributional critic: model the full return geometry, not just its expectation"
      subtitle="The paper adopts a quantile approximation to the return distribution. This lets the controller reason about the lower tail of dialogue outcomes instead of only a scalar value estimate."
      backgroundSrc="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
      footerLabel="Quantile critic"
    >
      <div className="grid h-full w-full grid-cols-[0.95fr_1.15fr] gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <Eyebrow>Return distribution</Eyebrow>
          <div
            style={{
              fontSize: 'clamp(17px, 1.24vw, 24px)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              lineHeight: 1.7,
              opacity: 0.92,
            }}
          >
            {`V^pi(b_t) = E[Z^pi(b_t)]

Z^pi_phi(b_t) ~= { q_(phi,i)(b_t) }_(i=1)^N

tau_i = (i - 1/2) / N`}
          </div>

          <div style={{ marginTop: '1.1rem' }}>
            <BulletList
              compact
              items={[
                <span>
                  <strong>scalar A2C</strong> compresses all future dialogue uncertainty into one number
                </span>,
                <span>
                  <strong>distributional A2C</strong> keeps the quantile structure of possible outcomes
                </span>,
                <span>
                  this enables lower-tail functionals such as <strong>CVaR</strong>
                </span>,
              ]}
            />
          </div>
        </RLPanel>

        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <Eyebrow>Quantile Bellman target and loss</Eyebrow>
          <div
            style={{
              fontSize: 'clamp(15px, 1.08vw, 20px)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              lineHeight: 1.75,
              opacity: 0.94,
              whiteSpace: 'pre-wrap',
            }}
          >
            {`z_hat_(t,i) = r_t + gamma (1 - d_t) q_(phi,i)(b_(t+1))

L_QR(phi) = (1 / N^2) sum_i sum_j rho_(tau_i)^kappa
            ( z_hat_(t,j) - q_(phi,i)(b_t) )`}
          </div>

          <div className="grid grid-cols-3 gap-4" style={{ marginTop: '1rem' }}>
            {[
              ['31 quantiles', 'used in the released benchmark implementation'],
              ['Huber penalty', 'stabilizes critic learning around noisy targets'],
              ['bootstrap target', 'propagates long-horizon conversational consequences'],
            ].map(([head, text]) => (
              <div
                key={head}
                style={{
                  borderRadius: '14px',
                  padding: '0.85rem 0.9rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ fontSize: 'clamp(11px, 0.86vw, 15px)', fontWeight: 700 }}>{head}</div>
                <div style={{ fontSize: 'clamp(10px, 0.78vw, 13px)', opacity: 0.72, marginTop: '0.35rem', lineHeight: 1.45 }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </RLPanel>
      </div>
    </RLSlideFrame>
  );
}
