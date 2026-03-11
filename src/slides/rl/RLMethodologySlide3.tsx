import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const predictionResults = [
  { approach: 'Random Forest', accuracy: '0.67', auc: '0.71' },
  { approach: 'XGBoost', accuracy: '0.69', auc: '0.74' },
  { approach: 'GPT-4 (zero-shot)', accuracy: '0.59', auc: '0.63' },
  { approach: 'GPT-4 (few-shot)', accuracy: '0.62', auc: '0.68' },
  { approach: 'Commercial System A', accuracy: '0.71', auc: '0.76' },
  { approach: 'Hybrid LLM+ML', accuracy: '0.75', auc: '0.81' },
  { approach: 'SalesRLAgent (full)', accuracy: '0.967', auc: '0.98' },
];

const ablationResults = [
  { config: 'Full SalesRLAgent', accuracy: '0.967' },
  { config: '- Azure OpenAI embeddings', accuracy: '0.89  (-0.077)' },
  { config: '- Sequential modeling', accuracy: '0.86  (-0.107)' },
  { config: '- Meta-learning', accuracy: '0.94  (-0.027)' },
  { config: '- Advanced orchestration', accuracy: '0.92  (-0.047)' },
  { config: '- All specializations', accuracy: '0.68  (-0.287)' },
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
            Evaluation Results & Ablation Studies
          </p>
        </div>

        {/* Two-column tables */}
        <div className="flex-1 flex" style={{ marginTop: '2%', gap: 'clamp(10px, 1vw, 18px)' }}>
          {/* Left: Prediction Accuracy */}
          <div className="flex-1 flex flex-col">
            <LiquidGlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)', flex: 1 }}>
              <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 19px)', fontWeight: 700, marginBottom: 'clamp(8px, 0.7vw, 14px)' }}>
                Conversion Prediction Accuracy
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <th style={{ textAlign: 'left', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Approach</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Accuracy</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>AUC-ROC</th>
                  </tr>
                </thead>
                <tbody>
                  {predictionResults.map((r) => {
                    const isHighlight = r.approach.startsWith('SalesRLAgent');
                    return (
                      <tr
                        key={r.approach}
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
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
                          fontSize: 'clamp(10px, 0.75vw, 14px)',
                          padding: 'clamp(4px, 0.35vw, 7px) 0',
                          fontVariantNumeric: 'tabular-nums',
                          opacity: isHighlight ? 1 : 0.8,
                          fontWeight: isHighlight ? 700 : 400,
                        }}>
                          {r.auc}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </LiquidGlassCard>
          </div>

          {/* Right: Ablation + Impact */}
          <div className="flex-1 flex flex-col" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            <LiquidGlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)' }}>
              <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 19px)', fontWeight: 700, marginBottom: 'clamp(8px, 0.7vw, 14px)' }}>
                Ablation Study
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <th style={{ textAlign: 'left', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Configuration</th>
                    <th style={{ textAlign: 'right', fontSize: 'clamp(10px, 0.75vw, 13px)', opacity: 0.6, paddingBottom: 'clamp(4px, 0.35vw, 8px)', fontWeight: 600 }}>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {ablationResults.map((r) => {
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
                Real-World Impact (90-Day A/B Test)
              </h3>
              <div style={{ display: 'flex', gap: 'clamp(10px, 1vw, 18px)' }}>
                {[
                  { metric: 'Conversion Rate', value: '+43.2%' },
                  { metric: 'Sales Cycle', value: '-22%' },
                  { metric: 'Deal Size', value: '+14%' },
                  { metric: 'CSAT Score', value: '+9%' },
                ].map((m) => (
                  <div key={m.metric} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(16px, 1.6vw, 28px)', fontWeight: 700, lineHeight: 1 }}>
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
