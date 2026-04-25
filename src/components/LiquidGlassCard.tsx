import type { ReactNode, CSSProperties } from 'react';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function LiquidGlassCard({ children, className = '', style }: LiquidGlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{
        backdropFilter: 'blur(20px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
        background: 'linear-gradient(135deg, rgba(16,24,43,0.82), rgba(13,14,29,0.74))',
        border: '1px solid rgba(255,255,255,0.14)',
        ...style,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 15% 10%, rgba(255,255,255,0.06), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
