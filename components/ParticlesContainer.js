import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useReducedMotion } from 'framer-motion';

const ParticlesContainer = () => {
  // with prefers-reduced-motion the particles are drawn but stay still
  const reduceMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      key={reduceMotion ? 'still' : 'moving'}
      id="tsparticles"
      className="w-full h-full absolute translate-z-0"
      init={particlesInit}
      // fullScreen stays at the library default (on): the canvas is fixed to the viewport,
      // so the wrapper's size classes don't constrain it
      options={{
        interactivity: {
          events: {
            onHover: { enable: !reduceMotion, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#e68e2e' },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            enable: !reduceMotion,
            outModes: { default: 'bounce' },
            speed: 1,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesContainer;
