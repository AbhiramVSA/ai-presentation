import { AlertTriangle, Bot, Clock, Eye, Brain } from 'lucide-react';
import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface LimitationItem {
  icon: LucideIcon;
  label: string;
  desc: string;
}

const limitations: LimitationItem[] = [
  {
    icon: AlertTriangle,
    label: 'No Real-Time Conversion Prediction',
    desc: 'Existing LLM-based systems cannot accurately estimate the probability of closing a sale during live conversations.',
  },
  {
    icon: Clock,
    label: 'No Turn-by-Turn Tracking',
    desc: 'Current tools treat each interaction independently, missing how sequential conversation dynamics affect likelihood of sale.',
  },
  {
    icon: Bot,
    label: 'Generic Guidance Only',
    desc: 'Commercial platforms provide template-based suggestions rather than strategically-timed, context-aware recommendations.',
  },
  {
    icon: Eye,
    label: 'Reactive, Not Proactive',
    desc: 'Systems respond only to explicit queries rather than proactively guiding sales strategy based on conversation state.',
  },
  {
    icon: Brain,
    label: 'No Meta-Learning Capability',
    desc: 'LLM-based tools cannot assess the boundaries of their own knowledge or express calibrated uncertainty in predictions.',
  },
];

export default function RLIntroSlide1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>03</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Introduction
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Limitations of Current Sales AI Systems
          </p>
        </div>

        {/* Limitation cards */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ marginTop: '1.5%', gap: 'clamp(8px, 0.8vw, 14px)' }}
        >
          {limitations.map((d) => (
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
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Introduction (1/2)</span>
        </div>
      </div>
    </div>
  );
}
