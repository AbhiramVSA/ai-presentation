import type { ReactNode } from 'react';
import LiquidGlassCard from '../../components/LiquidGlassCard';

export function RLPanel({
  children,
  className = '',
  padding = 'clamp(18px, 1.45vw, 26px)',
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
          marginBottom: '0.7rem',
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
          fontSize: 'clamp(21px, 1.55vw, 28px)',
          fontWeight: 700,
          lineHeight: 1,
          color: accent,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 'clamp(11px, 0.76vw, 13px)',
          opacity: 0.66,
          marginTop: '0.5rem',
          lineHeight: 1.42,
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
        gap: compact ? 'clamp(9px, 0.75vw, 14px)' : 'clamp(12px, 1vw, 20px)',
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
              fontSize: compact ? 'clamp(11px, 0.78vw, 13px)' : 'clamp(13px, 0.9vw, 15px)',
              opacity: 0.9,
              lineHeight: compact ? 1.5 : 1.58,
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
  headers: ReactNode[];
  rows: ReactNode[][];
  highlightLast?: boolean;
}) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                textAlign: 'left',
                fontSize: '12px',
                opacity: 0.58,
                paddingBottom: '0.65rem',
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
                    padding: '0.64rem 0',
                    fontSize: 'clamp(11px, 0.76vw, 13px)',
                    opacity: highlight ? 1 : 0.84,
                    fontWeight: highlight ? 700 : 400,
                    lineHeight: 1.45,
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
