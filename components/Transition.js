import {motion} from 'framer-motion'

// Same wipe as before (the panels cover the screen, then collapse towards the left edge),
// drawn with scaleX instead of animating width + x: transform only, no layout work per frame.
// (scaleX as a key, not a transform string, so MotionConfig reducedMotion can skip it)
const transitionVariants = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
  },
  exit: {
    scaleX: [0, 1],
  },
}

// strong ease-in-out for on-screen movement
const ease = [0.77, 0, 0.175, 1];

const panels = [
  { color: 'bg-[#1d1d1d]', z: 'z-50', delay: 0.1 },
  { color: 'bg-[#efe7dc]', z: 'z-40', delay: 0.2 },
  { color: 'bg-[#f17e41]', z: 'z-30', delay: 0.3 },
];

const Transition = () => {
  return (
    <>
      {panels.map((panel) => (
        <motion.div
          key={panel.z}
          aria-hidden='true'
          className={`fixed inset-0 origin-left pointer-events-none ${panel.z} ${panel.color}`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: panel.delay, duration: 0.5, ease}}
        ></motion.div>
      ))}
    </>
  );
};

export default Transition;
