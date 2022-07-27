import { useState } from 'react';
import Lottie from 'react-lottie';
import animationBefore from './assets/16940-a-boy-with-spots-on-his-face-un-chico-con-manchas-en-su-cara.json'
import animationAfter from './assets/16936-chico-enfermo-ill-boy.json'


export const App = () => {

  const [animation, setAnimation] = useState<any>(animationBefore)

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
      <div style={{width: '400px', height: '400px'}} onMouseEnter={() => {setAnimation(animationAfter)}} onMouseLeave={() => {setAnimation(animationBefore)}}>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  )
}
