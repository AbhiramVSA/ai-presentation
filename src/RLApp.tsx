import Presentation from './components/Presentation';
import RLCoverSlide from './slides/rl/RLCoverSlide';
import RLAbstractSlide from './slides/rl/RLAbstractSlide';
import RLIntroSlide1 from './slides/rl/RLIntroSlide1';
import RLIntroSlide2 from './slides/rl/RLIntroSlide2';
import RLMethodologySlide1 from './slides/rl/RLMethodologySlide1';
import RLMethodologySlide2 from './slides/rl/RLMethodologySlide2';
import RLMethodologySlide3 from './slides/rl/RLMethodologySlide3';
import RLArchitectureSlide from './slides/rl/RLArchitectureSlide';
import RLExperimentSlide from './slides/rl/RLExperimentSlide';
import RLDeploymentSlide from './slides/rl/RLDeploymentSlide';
import RLConclusionSlide from './slides/rl/RLConclusionSlide';
import RLReferencesSlide from './slides/rl/RLReferencesSlide';

export default function RLApp() {
  return (
    <Presentation
      slides={[
        <RLCoverSlide />,
        <RLAbstractSlide />,
        <RLIntroSlide1 />,
        <RLIntroSlide2 />,
        <RLMethodologySlide1 />,
        <RLMethodologySlide2 />,
        <RLArchitectureSlide />,
        <RLExperimentSlide />,
        <RLMethodologySlide3 />,
        <RLDeploymentSlide />,
        <RLConclusionSlide />,
        <RLReferencesSlide />,
      ]}
    />
  );
}
