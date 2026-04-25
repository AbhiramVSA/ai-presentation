import RLSlideFrame from './RLSlideFrame';
import { Eyebrow, Metric, MiniTable, RLPanel } from './RLPrimitives';

const resultsRows = [
  ['Mean return', '2.286 +/- 0.178', '1.766 +/- 0.063'],
  ['Return std.', '3.488 +/- 0.066', '3.163 +/- 0.091'],
  ['Success rate', '0.507 +/- 0.027', '0.371 +/- 0.026'],
  ['Mean length', '6.599 +/- 0.084', '7.298 +/- 0.135'],
  ['CVaR_0.1', '-1.465 +/- 0.007', '-1.140 +/- 0.069'],
];

export default function RLMethodologySlide3() {
  return (
    <RLSlideFrame
      slideNumber="09"
      section="Benchmark Results"
      title="Empirical result: safer lower tail, lower average reward"
      subtitle="The benchmark is intentionally honest. Distributional A2C does not dominate scalar A2C on every metric. It trades some average performance for a materially better downside-risk profile."
      backgroundSrc="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
      footerLabel="Results"
    >
      <div className="grid h-full min-h-0 w-full grid-cols-[0.95fr_1.05fr] gap-5">
        <RLPanel>
          <MiniTable
            headers={['Metric', 'Scalar A2C', 'Distributional A2C']}
            rows={resultsRows}
          />
          <div
            style={{
              marginTop: '0.95rem',
              fontSize: '12px',
              opacity: 0.58,
              lineHeight: 1.45,
            }}
          >
            Three-seed averages from the released simulator and benchmark script, matching the rewritten paper.
          </div>
        </RLPanel>

        <div className="grid min-h-0 grid-rows-[84px_1fr_78px] gap-5">
          <RLPanel>
            <div className="flex gap-5">
              <Metric value="-22.2%" label="improvement in worst-decile loss magnitude" accent="#bbf7d0" />
              <Metric value="-9.3%" label="reduction in return volatility" accent="#bfdbfe" />
            </div>
          </RLPanel>

          <RLPanel className="min-h-0" padding="14px">
            <div className="grid h-full min-h-0 grid-cols-[1.35fr_0.8fr] gap-4">
              <div className="min-h-0">
                <Eyebrow>Training curves</Eyebrow>
                <img
                  src="/rl/training_curves.png"
                  alt="Training curves generated from the benchmark scripts"
                  style={{
                    width: '100%',
                    height: 'calc(100% - 24px)',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    background: '#ffffff',
                  }}
                />
              </div>
              <div className="min-h-0">
                <Eyebrow>Tail-risk proxy</Eyebrow>
                <img
                  src="/rl/tail_risk_curve.png"
                  alt="Tail-risk curve generated from the benchmark scripts"
                  style={{
                    width: '100%',
                    height: 'calc(100% - 24px)',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    background: '#ffffff',
                  }}
                />
              </div>
            </div>
          </RLPanel>

          <RLPanel>
            <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: 1.6 }}>
              For a sales workflow, that trade-off is often desirable. A controller that reduces lower-tail failure
              severity can be more deployable than one that maximizes average reward while exposing the system to more
              catastrophic conversation paths.
            </p>
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
