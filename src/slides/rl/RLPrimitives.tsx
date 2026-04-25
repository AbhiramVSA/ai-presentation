import type { ReactNode } from 'react';
import LiquidGlassCard from '../../components/LiquidGlassCard';

export function RLPanel({
  children,
  className = '',
  padding = '18px',
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <LiquidGlassCard className={className} style={{ padding }}>
      {children}
    </LiquidGlassCard>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 'clamp(10px, 0.78vw, 14px)',
        opacity: 0.55,
        textTransform: 'uppercase',
        letterSpacing: '0',
        marginBottom: '0.55rem',
      }}
    >
      {children}
    </div>
  );
}

export function Metric({
  value,
  label,
  accent = '#f3f4f6',
}: {
  value: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="flex-1">
      <div
        style={{
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: 1,
          color: accent,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '12px',
          opacity: 0.62,
          marginTop: '0.4rem',
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function BulletList({
  items,
  compact = false,
}: {
  items: ReactNode[];
  compact?: boolean;
}) {
  return (
    <ul
      className="list-none"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 'clamp(8px, 0.7vw, 14px)' : 'clamp(10px, 0.95vw, 18px)',
      }}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-start" style={{ gap: '0.8rem' }}>
          <span
            style={{
              width: '0.45rem',
              height: '0.45rem',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.72)',
              marginTop: '0.58rem',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: compact ? '12px' : '14px',
              opacity: 0.9,
              lineHeight: 1.52,
            }}
          >
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function MiniTable({
  headers,
  rows,
  highlightLast = false,
}: {
  headers: string[];
  rows: string[][];
  highlightLast?: boolean;
}) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
          {headers.map((header) => (
            <th
              key={header}
              style={{
                textAlign: 'left',
                fontSize: '12px',
                opacity: 0.58,
                paddingBottom: '0.55rem',
                fontWeight: 600,
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const highlight = highlightLast && rowIndex === rows.length - 1;
          return (
            <tr key={rowIndex} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    padding: '0.55rem 0',
                    fontSize: '12px',
                    opacity: highlight ? 1 : 0.84,
                    fontWeight: highlight ? 700 : 400,
                    lineHeight: 1.4,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function MathBlock({
  lines,
  size = '18px',
  gap = '0.5rem',
}: {
  lines: ReactNode[];
  size?: string;
  gap?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        fontSize: size,
        fontFamily: '"Cambria Math", "STIX Two Math", "Times New Roman", serif',
        lineHeight: 1.5,
        letterSpacing: '0',
        opacity: 0.95,
      }}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          style={{
            minHeight: '1.2em',
            whiteSpace: 'normal',
            overflowWrap: 'anywhere',
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}
