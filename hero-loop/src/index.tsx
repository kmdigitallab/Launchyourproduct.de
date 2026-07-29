import { registerRoot, Composition } from 'remotion';
import { HeroLoop } from './HeroLoop';

const RemotionRoot: React.FC = () => (
  <Composition
    id="HeroLoop"
    component={HeroLoop}
    durationInFrames={240}
    fps={30}
    width={1920}
    height={1080}
  />
);

registerRoot(RemotionRoot);
