import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import lottie from 'lottie-web';

function Loading() {
    const loadingRef = useRef(null);
  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: loadingRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../loading.json'),
    });
    return () => {
      animationInstance.destroy();
    };
  }, []);
  return (
    <div className = "loading-page" ref={loadingRef}></div>
  )
}

export default Loading