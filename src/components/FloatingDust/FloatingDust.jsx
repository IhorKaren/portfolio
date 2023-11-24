import { useEffect } from 'react';
import { Scene } from './FloatingDust.styled';
import Parallax from 'parallax-js';

const FloatingDust = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);

    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <Scene id="scene" data-friction-x="0.03" data-friction-y="0.05">
      <li id="specks" data-depth="0.1"></li>
      <li className="layer" id="layer-1" data-depth="0.15">
        <div className="img" id="img-1"></div>
      </li>
      <li className="layer" id="layer-2" data-depth="0.25">
        <div className="img" id="img-2"></div>
      </li>
      <li className="layer" id="layer-3" data-depth="0.45">
        <div className="img" id="img-3"></div>
      </li>
    </Scene>
  );
};

export default FloatingDust;
