import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, MathBlock, RLPanel } from './RLPrimitives';

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
        <RLPanel>
          <Eyebrow>Return distribution</Eyebrow>
          <MathBlock
            size="clamp(18px, 1.18vw, 25px)"
            lines={[
              <>
                V<sup>π</sup>(b<sub>t</sub>) = E[Z<sup>π</sup>(b<sub>t</sub>)]
              </>,
              <>
                Z<sup>π</sup>
                <sub>φ</sub>(b<sub>t</sub>) ≈ {'{'}q<sub>φ,i</sub>(b<sub>t</sub>){'}'}
                <sub>i=1</sub>
                <sup>N</sup>
              </>,
              <>
                τ<sub>i</sub> = (i − 1/2) / N
              </>,
            ]}
          />

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

        <RLPanel>
          <Eyebrow>Quantile Bellman target and loss</Eyebrow>
          <MathBlock
            size="clamp(15px, 1vw, 20px)"
            lines={[
              <>
                ẑ<sub>t,i</sub> = r<sub>t</sub> + γ (1 − d<sub>t</sub>) q<sub>φ,i</sub>(b<sub>t+1</sub>)
              </>,
              <>
                L<sub>QR</sub>(φ) = (1 / N<sup>2</sup>) Σ<sub>i</sub> Σ<sub>j</sub> ρ<sub>τ<sub>i</sub></sub>
                <sup>κ</sup>
              </>,
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( ẑ<sub>t,j</sub> − q<sub>φ,i</sub>(b<sub>t</sub>) )
              </>,
            ]}
          />

          <div className="grid grid-cols-3 gap-4" style={{ marginTop: '1rem' }}>
            {[
              ['31 quantiles', 'used in the released benchmark implementation'],
              ['Huber penalty', 'stabilizes critic learning around noisy targets'],
              ['bootstrap target', 'propagates long-horizon conversational consequences'],
            ].map(([head, text]) => (
              <div
                key={head}
                style={{
                  borderRadius: '8px',
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
