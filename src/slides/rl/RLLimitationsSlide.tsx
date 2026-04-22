import RLSlideFrame from './RLSlideFrame';
import { BulletList, RLPanel } from './RLPrimitives';

export default function RLLimitationsSlide() {
  return (
    <RLSlideFrame
      slideNumber="09"
      section="Limitations and Future Work"
      title="What remains unresolved"
      subtitle="The rewritten paper explicitly avoids overclaiming. The current result is a strong, reproducible simulator study and a deployment framing, not a final production sales benchmark."
      footerLabel="Limitations"
    >
      <div className="grid h-full w-full grid-cols-2 gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <div
            style={{
              fontSize: 'clamp(11px, 0.82vw, 14px)',
              opacity: 0.58,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.8rem',
            }}
          >
            Present limitations
          </div>
          <BulletList
            items={[
              <span>
                the environment is still <strong>synthetic</strong>; it cannot substitute for a real CRM-integrated,
                human-in-the-loop sales dataset
              </span>,
              <span>
                the uncertainty proxy is critic dispersion, not a fully calibrated Bayesian posterior
              </span>,
              <span>
                frontier-model comparisons are currently <strong>structural</strong> unless API-side evaluation is run
                with account-specific keys and budgets
              </span>,
              <span>
                reward design remains normative: if the reward is misspecified, the controller will optimize the wrong
                behavior
              </span>,
            ]}
          />
        </RLPanel>

        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <div
            style={{
              fontSize: 'clamp(11px, 0.82vw, 14px)',
              opacity: 0.58,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.8rem',
            }}
          >
            Next experiments
          </div>
          <BulletList
            items={[
              <span>
                replace the synthetic dynamics with <strong>logged sales trajectories</strong> and off-policy
                evaluation
              </span>,
              <span>
                benchmark frontier models through the notebook harness on the exact same macro-action environment
              </span>,
              <span>
                test richer critics: ensembles, implicit quantile networks, and multimodal return models
              </span>,
              <span>
                integrate the policy with a real language layer and measure business metrics such as cycle time, close
                rate, and handoff quality
              </span>,
            ]}
          />
        </RLPanel>
      </div>
    </RLSlideFrame>
  );
}
