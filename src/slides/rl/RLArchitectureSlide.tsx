import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, RLPanel } from './RLPrimitives';

export default function RLArchitectureSlide() {
  return (
    <RLSlideFrame
      slideNumber="07"
      section="System Architecture"
      title="The controller separates policy optimization from language realization"
      subtitle="The RL policy chooses the high-level sales move. A frontier model can then realize that move as natural language, tool use, or CRM action without replacing the trained control loop."
      footerLabel="Architecture"
    >
      <div className="grid h-full min-h-0 w-full grid-cols-[1.35fr_0.85fr] gap-5">
        <RLPanel className="min-h-0">
          <img
            src="/rl/architecture_diagram.png"
            alt="Sales RL Agent architecture diagram"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '390px',
              objectFit: 'contain',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.92)',
              padding: '12px',
            }}
          />
        </RLPanel>

        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Control loop</Eyebrow>
            <BulletList
              compact
              items={[
                <span>dialogue and CRM observations are encoded into belief state b_t</span>,
                <span>actor selects one macro-action from the seven-action sales space</span>,
                <span>quantile critic estimates mean return, dispersion, and lower-tail risk</span>,
                <span>reward feedback updates the policy from sequential sales outcomes</span>,
              ]}
            />
          </RLPanel>

          <RLPanel>
            <Eyebrow>Why this matters</Eyebrow>
            <p style={{ fontSize: '14px', lineHeight: 1.55, opacity: 0.9 }}>
              The paper’s comparison against GPT-5, GPT-5.1, and Claude Sonnet 4.5 is structural: those models are
              strong prompted modules, while the Sales RL Agent is the policy optimizer that exposes return-tail risk.
            </p>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
