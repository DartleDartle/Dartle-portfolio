// Entrance used across the pages. Same directions and delays as before, with a shorter travel
// and a strong ease-out, so content is readable sooner and settles instead of drifting.
const DISTANCE = 40;

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? DISTANCE : direction === 'down' ? -DISTANCE : 0,
      opacity: 0,
      x: direction === 'left' ? DISTANCE : direction === 'right' ? -DISTANCE : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.9,
        delay: delay,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };
};
