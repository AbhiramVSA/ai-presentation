import { Database, Layers, FileText, Cpu, Sparkles } from 'lucide-react';
import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface StepItem {
  icon: LucideIcon;
  label: string;
  desc: string;
}

const steps: StepItem[] = [
  {
    icon: Sparkles,
    label: 'Hybrid Data Construction (70/30 Split)',
    desc: '70% synthetic conversations generated via GPT-5 with designed templates across 15 industries (3–27 turns, balanced outcomes). 30% real-world data sourced from HuggingFace\'s goendalf666/sales-conversations corpus, restructured into turn-level pairs with conversion labels.',
  },
  {
    icon: FileText,
    label: 'Data Processing Pipeline',
    desc: 'Text cleaning, entity standardization, conversation segmentation into turns, and feature extraction for semantic content (what was said) and conversational dynamics (how it was said).',
  },
  {
    icon: Layers,
    label: 'Embedding Generation',
    desc: 'OpenAI text-embedding-3-large producing 3072-dimensional vectors via API, capturing deep semantic relationships with domain-specific feature engineering layered on top.',
  },
  {
    icon: Database,
    label: 'State Representation',
    desc: 'Weighted conversation history embeddings, turn-specific features (speaking time, question density, sentiment), customer engagement signals, and sales technique identification.',
  },
  {
    icon: Cpu,
    label: 'Training Infrastructure',
    desc: 'Curriculum learning from simple to complex conversations, adversarial training with counter-examples, ensemble techniques, and specialized batch construction. Estimated training: ~6 hours on CPU.',
  },
];

export default function RLMethodologySlide1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>05</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Methodology
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Data Generation, Processing & State Design
          </p>
        </div>

        {/* Step cards */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ marginTop: '1.5%', gap: 'clamp(8px, 0.8vw, 14px)' }}
        >
          {steps.map((d) => (
            <LiquidGlassCard
              key={d.label}
              style={{ padding: 'clamp(12px, 1.2vw, 22px) clamp(16px, 1.6vw, 28px)' }}
            >
              <div className="flex items-start" style={{ gap: 'clamp(14px, 1.2vw, 24px)' }}>
                <d.icon
                  style={{
                    width: 'clamp(22px, 1.8vw, 34px)',
                    height: 'clamp(22px, 1.8vw, 34px)',
                    opacity: 0.8,
                    flexShrink: 0,
                    marginTop: 'clamp(2px, 0.2vw, 4px)',
                  }}
                  strokeWidth={1.5}
                />
                <div>
                  <h3 style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', fontWeight: 700 }}>
                    {d.label}
                  </h3>
                  <p style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.8, lineHeight: 1.5, marginTop: 'clamp(2px, 0.2vw, 4px)' }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Methodology (1/3)</span>
        </div>
      </div>
    </div>
  );
}
