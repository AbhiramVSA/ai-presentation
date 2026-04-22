import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, MathBlock, RLPanel } from './RLPrimitives';

export default function RLMethodologySlide2() {
  return (
    <RLSlideFrame
      slideNumber="06"
      section="Risk-Sensitive Optimization"
      title="Policy updates are uncertainty-aware"
      subtitle="The actor is not driven by a naive temporal-difference target. It is regularized by critic dispersion so that brittle, high-risk states have smaller influence on policy improvement."
      backgroundSrc="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8"
      footerLabel="Risk-aware actor"
    >
      <div className="grid h-full w-full grid-cols-[1.1fr_0.95fr] gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <Eyebrow>Risk functionals</Eyebrow>
          <MathBlock
            size="clamp(15px, 1.02vw, 20px)"
            lines={[
              <>
                q̄<sub>φ</sub>(b<sub>t</sub>) = (1 / N) Σ<sub>i</sub> q<sub>φ,i</sub>(b<sub>t</sub>)
              </>,
              <>
                CVaR<sub>α</sub>(Z<sub>φ</sub>
                <sup>π</sup>(b<sub>t</sub>)) ≈ (1 / K<sub>α</sub>) Σ<sub>i=1</sub>
                <sup>K<sub>α</sub></sup> q<sub>φ,i</sub>(b<sub>t</sub>)
              </>,
              <>
                u<sub>φ</sub>(b<sub>t</sub>) = √((1 / N) Σ<sub>i</sub> (q<sub>φ,i</sub>(b<sub>t</sub>) − q̄<sub>φ</sub>(b<sub>t</sub>))<sup>2</sup>)
              </>,
            ]}
          />

          <div style={{ marginTop: '1rem' }}>
            <BulletList
              compact
              items={[
                <span>
                  <strong>q_bar</strong> is the critic-implied mean return
                </span>,
                <span>
                  <strong>CVaR</strong> approximates the lower tail and captures catastrophic dialogue outcomes
                </span>,
                <span>
                  <strong>u_phi</strong> is a dispersion proxy used to penalize uncertain states in the actor update
                </span>,
              ]}
            />
          </div>
        </RLPanel>

        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <Eyebrow>Actor objective</Eyebrow>
            <MathBlock
              size="clamp(14px, 0.96vw, 18px)"
              lines={[
                <>
                  A<sub>t</sub>
                  <sup>risk</sup> = ( z̄<sub>t</sub> − q̄<sub>φ</sub>(b<sub>t</sub>) ) − λ<sub>u</sub> u<sub>φ</sub>(b<sub>t</sub>)
                </>,
                <>
                  L<sub>π</sub>(θ) = − E<sub>t</sub>[ log π<sub>θ</sub>(a<sub>t</sub> | b<sub>t</sub>) sg(A<sub>t</sub>
                  <sup>risk</sup>) ]
                </>,
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− β<sub>H</sub> E<sub>t</sub>[ H(π<sub>θ</sub>(· | b<sub>t</sub>)) ]
                </>,
              ]}
            />
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <Eyebrow>Interpretation</Eyebrow>
            <BulletList
              compact
              items={[
                <span>
                  if critic uncertainty rises, the policy receives a <strong>smaller update</strong>
                </span>,
                <span>
                  this suppresses aggressive behavior in ambiguous buyer states
                </span>,
                <span>
                  mathematically, the paper links this to <strong>local robustness</strong> under observation
                  perturbations through quantile sensitivity
                </span>,
              ]}
            />
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
