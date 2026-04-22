import RLSlideFrame from './RLSlideFrame';
import { Metric, MiniTable, RLPanel } from './RLPrimitives';

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
      slideNumber="07"
      section="Benchmark Results"
      title="Empirical result: safer lower tail, lower average reward"
      subtitle="The benchmark is intentionally honest. Distributional A2C does not dominate scalar A2C on every metric. It trades some average performance for a materially better downside-risk profile."
      backgroundSrc="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
      footerLabel="Results"
    >
      <div className="grid h-full w-full grid-cols-[1.08fr_0.92fr] gap-5">
        <RLPanel padding="clamp(18px, 1.5vw, 28px)">
          <MiniTable
            headers={['Metric', 'Scalar A2C', 'Distributional A2C']}
            rows={resultsRows}
          />
          <div
            style={{
              marginTop: '0.95rem',
              fontSize: 'clamp(10px, 0.78vw, 13px)',
              opacity: 0.58,
              lineHeight: 1.45,
            }}
          >
            Three-seed averages from the released simulator and benchmark script, matching the rewritten paper.
          </div>
        </RLPanel>

        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <div className="flex gap-5">
              <Metric value="-22.2%" label="improvement in worst-decile loss magnitude" accent="#bbf7d0" />
              <Metric value="-9.3%" label="reduction in return volatility" accent="#bfdbfe" />
            </div>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <div
              style={{
                height: '180px',
                borderRadius: '18px',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: '14% 8% 16% 10%' }}>
                <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: 'rgba(255,255,255,0.12)' }} />
                <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <polyline
                    fill="none"
                    stroke="rgba(147,197,253,0.95)"
                    strokeWidth="2.4"
                    points="0,20 18,18 35,22 50,19 68,17 85,21 100,16"
                  />
                  <polyline
                    fill="none"
                    stroke="rgba(134,239,172,0.95)"
                    strokeWidth="2.4"
                    points="0,38 18,34 35,31 50,29 68,26 85,23 100,18"
                  />
                </svg>
              </div>
              <div style={{ position: 'absolute', left: '1rem', top: '0.8rem', fontSize: 'clamp(10px, 0.76vw, 13px)', opacity: 0.6 }}>
                stylized lower-tail comparison
              </div>
              <div style={{ position: 'absolute', left: '1rem', bottom: '0.8rem', fontSize: 'clamp(10px, 0.76vw, 13px)', opacity: 0.65 }}>
                blue = scalar mean-seeking policy
              </div>
              <div style={{ position: 'absolute', right: '1rem', bottom: '0.8rem', fontSize: 'clamp(10px, 0.76vw, 13px)', opacity: 0.65 }}>
                green = safer distributional tail
              </div>
            </div>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <p style={{ fontSize: 'clamp(12px, 0.92vw, 16px)', opacity: 0.9, lineHeight: 1.6 }}>
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
