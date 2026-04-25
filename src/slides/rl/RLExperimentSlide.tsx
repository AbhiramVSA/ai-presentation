import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, MiniTable, RLPanel } from './RLPrimitives';

const configRows = [
  ['Parallel envs', '64', '64'],
  ['Rollout steps', '16', '16'],
  ['Total updates', '220', '260'],
  ['Discount gamma', '0.98', '0.98'],
  ['GAE lambda', '0.95', '0.95'],
  ['Learning rate', '3e-4', '2e-4'],
  ['Critic', 'scalar value', '31 quantiles'],
  [<>CVaR α</>, '-', '0.30 train / 0.10 eval'],
];

export default function RLExperimentSlide() {
  return (
    <RLSlideFrame
      slideNumber="08"
      section="Experimental Protocol"
      title="The benchmark is reproducible from the released simulator"
      subtitle="The paper reports a three-seed CPU benchmark on seeds 7, 11, and 23, with the A100 scripts preserving the same ingredients at larger scale."
      footerLabel="Protocol"
    >
      <div className="grid h-full min-h-0 w-full grid-cols-[1.1fr_0.9fr] gap-5">
        <RLPanel>
          <Eyebrow>Training setup</Eyebrow>
          <MiniTable headers={['Setting', 'Scalar A2C', 'Distributional A2C']} rows={configRows} />
        </RLPanel>

        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Simulator state</Eyebrow>
            <BulletList
              compact
              items={[
                <span>latent fit, budget readiness, urgency, trust, price sensitivity, objection load, fatigue</span>,
                <span>stage progression and information coverage gate premature close attempts</span>,
                <span>episodes terminate on close or at an eight-turn timeout horizon</span>,
              ]}
            />
          </RLPanel>

          <RLPanel>
            <Eyebrow>Reported metrics</Eyebrow>
            <BulletList
              compact
              items={[
                <span>mean episode return and return standard deviation</span>,
                <span>success rate and mean conversation length</span>,
                <span>CVaR<sub>0.1</sub>: average return in the worst 10 percent of episodes</span>,
              ]}
            />
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
