export const smoothScrollTo = (target, duration) => {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startTime = performance.now();
  
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      window.scrollTo(0, startPosition + (targetPosition - startPosition) * easeInOutQuad(progress));
  
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  
    requestAnimationFrame(animateScroll);
  };
  