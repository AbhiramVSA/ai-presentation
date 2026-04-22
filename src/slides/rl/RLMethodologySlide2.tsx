import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, RLPanel } from './RLPrimitives';

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
          <div
            style={{
              fontSize: 'clamp(15px, 1.05vw, 20px)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              lineHeight: 1.74,
              opacity: 0.94,
            }}
          >
            {`q_bar_phi(b_t) = (1 / N) sum_i q_(phi,i)(b_t)

CVaR_alpha(Z_phi^pi(b_t))
  ~= (1 / K_alpha) sum_(i=1)^(K_alpha) q_(phi,i)(b_t)

u_phi(b_t)
  = sqrt( (1 / N) sum_i ( q_(phi,i)(b_t) - q_bar_phi(b_t) )^2 )`}
          </div>

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
            <div
              style={{
                fontSize: 'clamp(14px, 1vw, 18px)',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                lineHeight: 1.72,
                opacity: 0.94,
              }}
            >
              {`A_t^(risk) = ( z_hat_bar_t - q_bar_phi(b_t) )
           - lambda_u u_phi(b_t)

L_pi(theta) = - E_t [ log pi_theta(a_t | b_t) sg(A_t^(risk)) ]
              - beta_H E_t [ H(pi_theta(. | b_t)) ]`}
            </div>
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
