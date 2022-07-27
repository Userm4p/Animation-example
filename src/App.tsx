import { useState } from 'react';
import animationBefore from './assets/16940-a-boy-with-spots-on-his-face-un-chico-con-manchas-en-su-cara.json'
import animationAfter from './assets/16936-chico-enfermo-ill-boy.json'
import { Animation } from './components/Animation';


export const App = () => {



  return (
    <>
      <Animation width={400} height={400} InitialAnimation={animationBefore} FinalAnimation={animationAfter}/>
      <Animation width={400} height={400} InitialAnimation={animationBefore} />
      <Animation width={400} height={400} InitialAnimation={animationBefore} />
    </>
  )
}
