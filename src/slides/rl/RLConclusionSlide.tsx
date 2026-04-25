import RLSlideFrame from './RLSlideFrame';
import { BulletList, Eyebrow, Metric, RLPanel } from './RLPrimitives';

export default function RLConclusionSlide() {
  return (
    <RLSlideFrame
      slideNumber="11"
      section="Conclusion"
      title="The result is a risk trade-off, not a blanket win claim"
      subtitle="The distributional actor-critic gives up average reward and close rate in the simulator, but it produces a safer lower-tail profile. That is the central conclusion of the paper."
      footerLabel="Conclusion and limits"
    >
      <div className="grid h-full min-h-0 w-full grid-cols-[0.9fr_1.1fr] gap-5">
        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Numerical conclusion</Eyebrow>
            <div className="flex gap-5">
              <Metric value="-22.2%" label="lower-tail severity reduction by CVaR magnitude" accent="#bbf7d0" />
              <Metric value="-9.3%" label="episode-return volatility reduction" accent="#bfdbfe" />
            </div>
          </RLPanel>

          <RLPanel>
            <Eyebrow>Trade-off accepted</Eyebrow>
            <div className="flex gap-5">
              <Metric value="-22.8%" label="mean return reduction against scalar A2C" accent="#fecaca" />
              <Metric value="-13.5pp" label="success-rate difference in the three-seed benchmark" accent="#fde68a" />
            </div>
          </RLPanel>
        </div>

        <div className="flex min-h-0 flex-col gap-5">
          <RLPanel>
            <Eyebrow>Final paper claim</Eyebrow>
            <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.92 }}>
              Sales dialogue control is a sequential decision problem whose economically relevant failures live in the
              lower tail of the return distribution. A scalar critic is too weak a summary when premature closes,
              objection escalation, and fatigue-driven collapse are costly.
            </p>
          </RLPanel>

          <RLPanel>
            <Eyebrow>Limitations kept explicit</Eyebrow>
            <BulletList
              compact
              items={[
                <span>the current environment is synthetic, not a production CRM benchmark</span>,
                <span>critic dispersion is an uncertainty proxy, not a calibrated Bayesian posterior</span>,
                <span>frontier-model comparisons are structural until API-side evaluation is run</span>,
                <span>reward design remains normative and must be validated against real sales outcomes</span>,
              ]}
            />
          </RLPanel>
        </div>
      </div>
    </RLSlideFrame>
  );
}
