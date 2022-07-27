import { useState } from 'react';
import Lottie from 'react-lottie';

interface Props {
    width : number;
    height : number;
    InitialAnimation : any;
    FinalAnimation ?: any;
}

export const Animation = ({width, height, InitialAnimation, FinalAnimation} : Props) => {

  const [animation, setAnimation] = useState<any>(InitialAnimation)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <div style={{width: width + 'px', height: height + 'px'}} onMouseEnter={() => {setAnimation((FinalAnimation) ?  (FinalAnimation) : (InitialAnimation))}} onMouseLeave={() => {setAnimation(InitialAnimation)}}>
        <Lottie options={defaultOptions}
          height={height}
          width={width}
        />
      </div>
    </div>
  )
}

