import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, MathBlock, RLPanel } from './RLPrimitives';

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
        <RLPanel className="flex flex-col justify-between">
          <div>
            <Eyebrow>POMDP formulation</Eyebrow>
            <div
              style={{
                fontSize: 'clamp(22px, 1.9vw, 34px)',
                fontWeight: 700,
                letterSpacing: '0',
                lineHeight: 1.2,
              }}
            >
              M = (S, O, A, P, R, Ω, γ)
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
          <MathBlock
            size="clamp(17px, 1.12vw, 23px)"
            lines={[
              <>
                r<sub>t</sub> = λ<sub>I</sub> ΔI<sub>t</sub> + λ<sub>T</sub> ΔT<sub>t</sub> + λ<sub>S</sub> ΔS<sub>t</sub>
              </>,
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− λ<sub>F</sub> F<sub>t</sub> − λ<sub>O</sub> O<sub>t</sub> − 𝟙[a<sub>t</sub> = close] Π<sub>t</sub>
              </>,
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 𝟙[a<sub>t</sub> = close] r<sup>(close)</sup>
                <sub>t</sub>
              </>,
            ]}
          />

          <div className="mt-5 grid grid-cols-2 gap-4">
            {[
              [<>ΔI<sub>t</sub></>, 'information coverage gained from the turn'],
              [<>ΔT<sub>t</sub></>, 'change in trust induced by the policy'],
              [<>ΔS<sub>t</sub></>, 'stage progression toward a legitimate close'],
              [<>F<sub>t</sub>, O<sub>t</sub></>, 'fatigue accumulation and objection escalation penalties'],
              [<>r<sub>t</sub><sup>(close)</sup></>, 'terminal gain or loss at close time'],
              [<>Π<sub>t</sub></>, 'premature-close penalty that blocks degenerate early closes'],
            ].map(([term, desc]) => (
              <div
                key={String(desc)}
                style={{
                  padding: '0.8rem 0.9rem',
                  borderRadius: '8px',
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
