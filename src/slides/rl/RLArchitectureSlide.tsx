import RLSlideFrame from './RLSlideFrame';
import { RLPanel } from './RLPrimitives';

export default function RLArchitectureSlide() {
  return (
    <RLSlideFrame
      slideNumber="07"
      section="System Architecture"
      title="The controller separates policy optimization from language realization"
      subtitle="The RL policy chooses the high-level sales move. A frontier model can then realize that move as natural language, tool use, or CRM action without replacing the trained control loop."
      footerLabel="Architecture"
    >
      <div className="min-h-0 w-full" style={{ height: 'calc(100% - 26px)' }}>
        <RLPanel className="h-full min-h-0" padding="12px">
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/rl/architecture_diagram.png"
              alt="Sales RL Agent architecture diagram"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </RLPanel>
      </div>
    </RLSlideFrame>
  );
}
