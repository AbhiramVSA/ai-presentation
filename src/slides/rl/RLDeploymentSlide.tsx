import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, MiniTable, RLPanel } from './RLPrimitives';

const artifactRows = [
  ['sales_rl_core.py', 'simulator, scalar A2C, distributional A2C, evaluation, figures'],
  ['run_sales_benchmark.py', 'reproduces JSON metrics and PNG/PDF plots'],
  ['train_sales_rl_agent.py', 'checkpointed training path for larger GPU runs'],
  ['use_sales_rl_agent.py', 'loads a policy and simulates rollout decisions'],
];

export default function RLDeploymentSlide() {
  return (
    <RLSlideFrame
      slideNumber="10"
      section="System and Training"
      title="Deployment pattern: RL control plus frontier-model realization"
      subtitle="The repo contains the simulator, training loop, benchmark harness, generated figures, and scripts for scaling the same setup on an A100."
      footerLabel="Architecture and deployment"
    >
      <div className="grid h-full min-h-0 w-full grid-cols-[1.05fr_0.95fr] gap-5">
        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Repository artifacts</Eyebrow>
            <MiniTable headers={['File', 'Role']} rows={artifactRows} />
          </RLPanel>

          <RLPanel>
            <Eyebrow>A100 run path</Eyebrow>
            <BulletList
              compact
              items={[
                <span>install CUDA PyTorch and runtime dependencies</span>,
                <span>set device to cuda and scale batch_envs, hidden_dim, and total_updates</span>,
                <span>train scalar and distributional policies, then save checkpoints and histories</span>,
                <span>regenerate figures and optional API-side frontier-model comparisons</span>,
              ]}
            />
          </RLPanel>
        </div>

        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Two-layer production stack</Eyebrow>
            <BulletList
              items={[
                <span>
                  <strong>Sales RL Agent</strong> chooses the next macro-action using state, reward, and risk.
                </span>,
                <span>
                  <strong>Frontier model</strong> turns that action into language, tool calls, CRM updates, or
                  evaluator feedback.
                </span>,
                <span>
                  <strong>Reward loop</strong> records conversion outcome, trust shift, fatigue, objections, and
                  information gain for future policy improvement.
                </span>,
              ]}
            />
          </RLPanel>

          <RLPanel>
            <Eyebrow>Main implication</Eyebrow>
            <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.92 }}>
              The paper does not claim that RL replaces strong language models. It claims that prompt-only control lacks
              a trained sales-return objective and an explicit return-tail estimate, so the RL policy should sit above
              the language layer as the decision optimizer.
            </p>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
