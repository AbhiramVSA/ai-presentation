import RLSlideFrame from './RLSlideFrame';
import { BulletList, MiniTable, RLPanel } from './RLPrimitives';

const rows = [
  [
    'GPT-5',
    'general-purpose frontier reasoning model',
    'no, unless wrapped in an external RL loop',
    'strong prompted planner or generator',
  ],
  [
    'GPT-5.1',
    'adaptive reasoning with faster easy-case inference',
    'no, unless externally trained',
    'efficient orchestrator or assistant',
  ],
  [
    'Claude Sonnet 4.5',
    'hybrid reasoning / agentic model',
    'no, unless externally trained',
    'long-context assistant inside the loop',
  ],
  [
    'Sales RL Agent',
    'optimize sales return under dialogue dynamics',
    'yes',
    'high-level risk-aware controller',
  ],
];

export default function RLIntroSlide2() {
  return (
    <RLSlideFrame
      slideNumber="04"
      section="Comparison Frame"
      title="Why compare against frontier models at all?"
      subtitle="Because in 2026 a serious sales-control paper cannot pretend the baseline is only generic ML or old LLM prompting. The correct comparison is structural: prompted frontier models are strong modules, but they are not directly reward-optimized sales policies."
      footerLabel="Frontier models vs RL controller"
    >
      <div className="grid h-full w-full grid-cols-[1.05fr_1.05fr] gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <MiniTable
            headers={['Controller', 'Primary objective', 'Online reward learning?', 'Best role']}
            rows={rows}
            highlightLast
          />
        </RLPanel>

        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <BulletList
              items={[
                <span>
                  A prompted LLM can choose the next move, but it does so from a <strong>frozen inference policy</strong>
                  , not from a sales-return objective trained against sequential reward.
                </span>,
                <span>
                  The RL controller exposes <strong>return mean, dispersion, and lower-tail risk</strong>; this is the
                  key mathematical distinction from prompt-only control.
                </span>,
                <span>
                  The best deployment pattern is <strong>RL for control, frontier LLM for language realization</strong>.
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
              Practical implication
            </div>
            <p style={{ fontSize: 'clamp(13px, 0.98vw, 17px)', opacity: 0.9, lineHeight: 1.6 }}>
              The claim is not that the Sales RL Agent replaces frontier models. The claim is that it gives the stack
              something those models do not naturally provide: a directly optimized, risk-sensitive sequential policy for
              the sales objective.
            </p>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
