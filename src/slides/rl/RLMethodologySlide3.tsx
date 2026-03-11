import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const projectedBaselines = [
  { approach: 'Random Forest', accuracy: '~0.65–0.70', source: 'Sakar et al., 2019' },
  { approach: 'XGBoost', accuracy: '~0.68–0.74', source: 'Sakar et al., 2019' },
  { approach: 'GPT-4 (zero-shot)', accuracy: '~0.55–0.62', source: 'Zhang et al., 2023' },
  { approach: 'GPT-4 (few-shot)', accuracy: '~0.60–0.68', source: 'Brown et al., 2020' },
  { approach: 'RL Dialog Policy', accuracy: '~0.82–0.88', source: 'Takanobu et al., 2019' },
  { approach: 'SalesRLAgent (projected)', accuracy: '~0.91–0.95', source: 'Our architecture' },
];

const ablationProjections = [
  { config: 'Full SalesRLAgent', accuracy: '~0.91–0.95' },
  { config: '- OpenAI embeddings', accuracy: '~0.84–0.88  (est. -0.07)' },
  { config: '- Sequential modeling', accuracy: '~0.80–0.85  (est. -0.10)' },
  { config: '- Meta-learning', accuracy: '~0.89–0.93  (est. -0.03)' },
  { config: '- All specializations', accuracy: '~0.65–0.70  (est. -0.25)' },
];

export default function RLMethodologySlide3() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>07</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Methodology
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Projected Performance &amp; Expected Ablation Impact
          </p>
        </div>

        {/* Two-column tables */}
        <div className="flex-1 flex" style={{ marginTop: '2%', gap: 'clamp(10px, 1vw, 18px)' }}>
          {/* Left: Projected Accuracy */}
          <div className="flex-1 flex flex-col">
            <LiquidGlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)', flex: 1 }}>
              <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 19px)', fontWeight: 700, marginBottom: 'clamp(8px, 0.7vw, 14px)' }}>
                Projected Conversion Prediction Accuracy
              </h3>
              <p style={{ fontSize: 'clamp(9px, 0.65vw, 12px)', opacity: 0.5, marginBottom: 'clamp(6px, 0.5vw, 10px)', fontStyle: 'italic' }}>
                Estimates derived from referenced literature baselines
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <th style={{ textAlign: 'left', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Approach</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Est. Accuracy</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {projectedBaselines.map((r) => {
                    const isHighlight = r.approach.startsWith('SalesRLAgent');
                    return (
                      <tr
                        key={r.approach}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <td style={{
                          fontSize: 'clamp(10px, 0.75vw, 14px)',
                          padding: 'clamp(4px, 0.35vw, 7px) 0',
                          opacity: isHighlight ? 1 : 0.8,
                          fontWeight: isHighlight ? 700 : 400,
                        }}>
                          {r.approach}
                        </td>
                        <td style={{
                          textAlign: 'right',
                          fontSize: 'clamp(10px, 0.75vw, 14px)',
                          padding: 'clamp(4px, 0.35vw, 7px) 0',
                          fontVariantNumeric: 'tabular-nums',
                          opacity: isHighlight ? 1 : 0.8,
                          fontWeight: isHighlight ? 700 : 400,
                        }}>
                          {r.accuracy}
                        </td>
                        <td style={{
                          textAlign: 'right',
                          fontSize: 'clamp(9px, 0.65vw, 12px)',
                          padding: 'clamp(4px, 0.35vw, 7px) 0',
                          opacity: 0.5,
                          fontStyle: 'italic',
                        }}>
                          {r.source}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </LiquidGlassCard>
          </div>

          {/* Right: Ablation Projections + Expected Impact */}
          <div className="flex-1 flex flex-col" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            <LiquidGlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)' }}>
              <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 19px)', fontWeight: 700, marginBottom: 'clamp(4px, 0.35vw, 8px)' }}>
                Expected Ablation Impact
              </h3>
              <p style={{ fontSize: 'clamp(9px, 0.65vw, 12px)', opacity: 0.5, marginBottom: 'clamp(6px, 0.5vw, 10px)', fontStyle: 'italic' }}>
                Component contribution estimates based on Reimers et al. & Henderson et al.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <th style={{ textAlign: 'left', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Configuration</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Est. Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {ablationProjections.map((r) => {
                    const isHighlight = r.config === 'Full SalesRLAgent';
                    return (
                      <tr key={r.config} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{
                          fontSize: 'clamp(10px, 0.75vw, 14px)',
                          padding: 'clamp(3px, 0.3vw, 6px) 0',
                          opacity: isHighlight ? 1 : 0.8,
                          fontWeight: isHighlight ? 700 : 400,
                        }}>{r.config}</td>
                        <td style={{
                          textAlign: 'right',
                          fontSize: 'clamp(10px, 0.75vw, 14px)',
                          padding: 'clamp(3px, 0.3vw, 6px) 0',
                          fontVariantNumeric: 'tabular-nums',
                          opacity: isHighlight ? 1 : 0.8,
                          fontWeight: isHighlight ? 700 : 400,
                        }}>{r.accuracy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </LiquidGlassCard>

            <LiquidGlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)' }}>
              <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 19px)', fontWeight: 700, marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                Projected Real-World Impact
              </h3>
              <p style={{ fontSize: 'clamp(9px, 0.65vw, 12px)', opacity: 0.5, marginBottom: 'clamp(6px, 0.5vw, 10px)', fontStyle: 'italic' }}>
                Targets based on RL dialogue policy gains (Li et al., 2020)
              </p>
              <div style={{ display: 'flex', gap: 'clamp(10px, 1vw, 18px)' }}>
                {[
                  { metric: 'Conversion Rate', value: '+35–45%' },
                  { metric: 'Sales Cycle', value: '-18–25%' },
                  { metric: 'Deal Size', value: '+10–18%' },
                  { metric: 'Inference', value: '<100ms' },
                ].map((m) => (
                  <div key={m.metric} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(14px, 1.4vw, 24px)', fontWeight: 700, lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: 'clamp(9px, 0.65vw, 12px)', opacity: 0.6, marginTop: 'clamp(2px, 0.2vw, 4px)' }}>
                      {m.metric}
                    </div>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Methodology (3/3)</span>
        </div>
      </div>
    </div>
  );
}
