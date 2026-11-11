import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, { useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

const ParticlesContainer = () => {
  // with prefers-reduced-motion the particles are drawn but stay still
  const reduceMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

const particlesLoaded = useCallback(async () => {}, []);

  return(
    <Particles
    key={reduceMotion ? 'still' : 'moving'}
    className='w-full h-full absolute translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={{
        fullscreen: {enable: false},
        background: {
          color: {
            value: ''
          },
        },
        fpslimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: !reduceMotion,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            }
          }
        },
        particles: {
          color:{
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true, 
          },
          move: {
            directions: 'none',
            enable: !reduceMotion,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max: 5}
          },
          detectRetina: true,

        }
      }}  
  />
 )

  
};

export default ParticlesContainer;
