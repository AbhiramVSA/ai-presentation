import VideoBackground from '../../components/VideoBackground';
import LiquidGlassCard from '../../components/LiquidGlassCard';

const leftCol = [
  {
    category: 'Reinforcement Learning & Dialogue',
    items: [
      'Takanobu, R. et al. "Guided Dialog Policy Learning: Reward Estimation for Multi-Domain Task-Oriented Dialog." EMNLP-IJCNLP 2019, pp. 100–110.',
      'Li, Z. et al. "Guided Dialog Policy Learning without Adversarial Learning in the Loop." Findings of EMNLP 2020.',
      'Henderson, P. et al. "Deep Reinforcement Learning That Matters." AAAI 2018.',
      'Schulman, J. et al. "Proximal Policy Optimization Algorithms." arXiv:1707.06347, 2017.',
      'Sutton, R. S. & Barto, A. G. "Reinforcement Learning: An Introduction." 2nd ed., MIT Press, 2018.',
    ],
  },
  {
    category: 'Meta-Learning & Uncertainty',
    items: [
      'Finn, C., Abbeel, P. & Levine, S. "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks." ICML 2017, pp. 1126–1135.',
      'Gal, Y. & Ghahramani, Z. "Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning." ICML 2016, pp. 1050–1059.',
      'Lakshminarayanan, B. et al. "Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles." NeurIPS 2017.',
    ],
  },
];

const rightCol = [
  {
    category: 'NLP, Embeddings & Retrieval',
    items: [
      'Devlin, J. et al. "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." NAACL-HLT 2019, pp. 4171–4186.',
      'Reimers, N. & Gurevych, I. "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks." EMNLP-IJCNLP 2019, pp. 3982–3992.',
      'Gao, L. et al. "Precise Zero-Shot Dense Retrieval without Relevance Labels." ACL 2023, pp. 1762–1777.',
      'Asghar, N. et al. "Affective Neural Response Generation." ECIR 2018, pp. 154–166.',
    ],
  },
  {
    category: 'Conversion Prediction & Sales AI',
    items: [
      'Sakar, C. O. et al. "Real-time Prediction of Online Shoppers\' Purchasing Intention using MLP and LSTM." Neural Computing & Applications, 31(10), pp. 6893–6908, 2019.',
      'Brown, T. et al. "Language Models are Few-Shot Learners." NeurIPS 2020.',
      'Li, Y. et al. "Synthetic Data Generation with Large Language Models for Text Classification." EMNLP 2023.',
    ],
  },
];

function RefCard({ category, items }: { category: string; items: string[] }) {
  return (
    <LiquidGlassCard style={{ padding: 'clamp(10px, 0.9vw, 18px) clamp(14px, 1.3vw, 24px)' }}>
      <h3 style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', fontWeight: 700, marginBottom: 'clamp(5px, 0.4vw, 8px)' }}>
        {category}
      </h3>
      <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3px, 0.25vw, 5px)' }}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start"
            style={{ fontSize: 'clamp(10px, 0.75vw, 14px)', opacity: 0.8, lineHeight: 1.45 }}
          >
            <span
              className="flex-shrink-0"
              style={{
                width: 'clamp(4px, 0.28vw, 5px)',
                height: 'clamp(4px, 0.28vw, 5px)',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.4)',
                marginTop: 'clamp(5px, 0.38vw, 7px)',
                marginRight: 'clamp(6px, 0.5vw, 9px)',
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </LiquidGlassCard>
  );
}

export default function RLReferencesSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>SalesRLAgent</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Reinforcement Learning</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>08</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2%' }}>
          References
        </h1>

        {/* Two-column layout */}
        <div className="flex flex-1" style={{ marginTop: '2%', gap: 'clamp(10px, 1vw, 18px)' }}>
          <div className="flex flex-col flex-1" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            {leftCol.map((r) => (
              <RefCard key={r.category} category={r.category} items={r.items} />
            ))}
          </div>
          <div className="flex flex-col flex-1" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            {rightCol.map((r) => (
              <RefCard key={r.category} category={r.category} items={r.items} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.7 }}>Thank You</span>
        </div>
      </div>
    </div>
  );
}
