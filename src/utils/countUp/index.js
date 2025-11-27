export function countUp(target, duration, callback) {
    let start = 0;
    let startTime = null;
  
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
  
      callback(value);
  
      if (progress < 1) requestAnimationFrame(step);
    };
  
    requestAnimationFrame(step);
  }
  