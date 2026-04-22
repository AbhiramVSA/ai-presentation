import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, RLPanel } from './RLPrimitives';

function Box({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        padding: '0.85rem 0.95rem',
        borderRadius: '14px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ fontSize: 'clamp(11px, 0.86vw, 15px)', fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 'clamp(10px, 0.78vw, 13px)', opacity: 0.72, marginTop: '0.35rem', lineHeight: 1.45 }}>
        {body}
      </div>
    </div>
  );
}

export default function RLDeploymentSlide() {
  return (
    <RLSlideFrame
      slideNumber="08"
      section="System and Training"
      title="Architecture, script workflow, and deployment pattern"
      subtitle="The repo now includes a reusable simulator and training module, a benchmark script, generated figures, and A100-oriented training and inference scripts. The production pattern is RL for control, frontier LLM for realization."
      backgroundSrc="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8"
      footerLabel="Architecture and deployment"
    >
      <div className="grid h-full w-full grid-cols-[1.02fr_1.08fr] gap-5">
        <div className="flex flex-col gap-5">
          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <Eyebrow>Control stack</Eyebrow>
            <div className="grid grid-cols-2 gap-3">
              <Box title="1. Dialogue + CRM signals" body="turn history, latent-state proxies, and noisy observations" />
              <Box title="2. Belief encoder" body="maps observations into a compact control state b_t" />
              <Box title="3. Actor head" body="chooses macro-actions such as discovery, social proof, follow-up, and close" />
              <Box title="4. Quantile critic" body="estimates return mean, dispersion, and lower-tail structure" />
              <Box title="5. Optional frontier model" body="realizes the chosen action as natural language or tool use" />
              <Box title="6. Reward loop" body="feeds information gain, trust shift, fatigue, objections, and close outcome back into training" />
            </div>
          </RLPanel>

          <RLPanel padding="clamp(18px, 1.5vw, 28px)">
            <Eyebrow>Repository artifacts</Eyebrow>
            <BulletList
              compact
              items={[
                <span>
                  <strong>sales_rl_core.py</strong> implements the vectorized simulator, scalar A2C, distributional
                  A2C, evaluation, and figure generation
                </span>,
                <span>
                  <strong>run_sales_benchmark.py</strong> reproduces the benchmark and emits JSON metrics plus PDF/PNG
                  curves
                </span>,
                <span>
                  <strong>train_sales_rl_agent.py</strong> and <strong>use_sales_rl_agent.py</strong> provide the
                  training, checkpoint loading, rollout simulation, and A100 execution path
                </span>,
              ]}
            />
          </RLPanel>
        </div>

        <RLPanel padding="clamp(18px, 1.5vw, 28px)" className="flex flex-col justify-between">
          <div>
            <Eyebrow>A100 run path</Eyebrow>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {[
                'install CUDA PyTorch build plus runtime dependencies',
                'set device = cuda and enlarge batch_envs / hidden_dim / total_updates',
                'train scalar and distributional policies, save checkpoints and histories',
                'generate figures and optional API-side comparisons for GPT-5, GPT-5.1, and Claude Sonnet 4.5',
              ].map((step, index) => (
                <div key={step} className="flex items-start" style={{ gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '1.9rem',
                      height: '1.9rem',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.09)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      fontSize: 'clamp(11px, 0.82vw, 14px)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div style={{ fontSize: 'clamp(12px, 0.92vw, 16px)', opacity: 0.88, lineHeight: 1.5 }}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              fontSize: 'clamp(13px, 0.96vw, 17px)',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Deployment recommendation: use the RL policy as the <strong>decision layer</strong> and a frontier model
            as the <strong>language layer</strong>. This preserves sequential optimization while still exploiting
            frontier-model generation quality.
          </div>
        </RLPanel>
      </div>
    </RLSlideFrame>
  );
}
