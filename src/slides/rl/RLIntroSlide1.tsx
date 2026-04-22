import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, RLPanel } from './RLPrimitives';

export default function RLIntroSlide1() {
  return (
    <RLSlideFrame
      slideNumber="03"
      section="Problem Setup"
      title="Sales dialogue is a sequential control problem, not a one-shot classifier"
      subtitle="Each action changes the future state of the prospect. Asking another discovery question, offering a discount too early, or closing at the wrong time changes trust, objections, fatigue, and ultimate conversion probability."
      backgroundSrc="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8"
      footerLabel="Formalization"
    >
      <div className="grid h-full w-full grid-cols-[1.02fr_1.08fr] gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)" className="flex flex-col justify-between">
          <div>
            <Eyebrow>POMDP formulation</Eyebrow>
            <div
              style={{
                fontSize: 'clamp(22px, 1.9vw, 34px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              P = (S, O, A, P, R, Omega, gamma)
            </div>
            <div style={{ marginTop: '1rem' }}>
              <BulletList
                compact
                items={[
                  <span>
                    <strong>latent state</strong> encodes fit, budget readiness, urgency, trust, price sensitivity,
                    objection load, fatigue, and stage
                  </span>,
                  <span>
                    <strong>observations</strong> are noisy turn-level signals extracted from dialogue and CRM context
                  </span>,
                  <span>
                    <strong>actions</strong> are macro-sales moves such as discovery, qualification, social proof,
                    discounting, follow-up, and close
                  </span>,
                ]}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: '1.1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              fontSize: 'clamp(12px, 0.9vw, 16px)',
              opacity: 0.84,
              lineHeight: 1.55,
            }}
          >
            The deck now follows the paper’s abstraction: the RL layer optimizes the macro-action policy, while a
            frontier model can optionally realize that action as natural language downstream.
          </div>
        </RLPanel>

        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <Eyebrow>Reward geometry</Eyebrow>
          <div
            style={{
              fontSize: 'clamp(16px, 1.2vw, 22px)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              lineHeight: 1.65,
              whiteSpace: 'pre-wrap',
              opacity: 0.92,
            }}
          >
            {`r_t = lambda_I Delta I_t + lambda_T Delta T_t + lambda_S Delta S_t
      - lambda_F F_t - lambda_O O_t
      + 1[a_t = close] r_t^(close)`}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {[
              ['Delta I_t', 'information coverage gained from the turn'],
              ['Delta T_t', 'change in trust induced by the policy'],
              ['Delta S_t', 'stage progression toward a legitimate close'],
              ['F_t, O_t', 'fatigue accumulation and objection escalation penalties'],
              ['r_t^(close)', 'terminal gain or loss at close time'],
              ['Pi_t', 'premature-close penalty that blocks degenerate early closes'],
            ].map(([term, desc]) => (
              <div
                key={term}
                style={{
                  padding: '0.8rem 0.9rem',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ fontSize: 'clamp(12px, 0.92vw, 16px)', fontWeight: 700 }}>{term}</div>
                <div style={{ fontSize: 'clamp(10px, 0.78vw, 13px)', opacity: 0.7, lineHeight: 1.45, marginTop: '0.35rem' }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </RLPanel>
      </div>
    </RLSlideFrame>
  );
}
