import { BsArrowRight } from 'react-icons/bs';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

import { useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('common');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: t('success'),
        showConfirmButton: false,
        timer: 1500,
      });

      setName('');
      setEmail('');
      setMessage('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('fail'),
      });
    }
  };

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-56 xl:pt-16 pb-28 xl:pb-0">
        <div className="w-full max-w-[720px] mx-auto">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-bold leading-[1.05] text-[clamp(34px,4vw,56px)] text-center"
          >
            {t('Connect1')} <span className="text-accent">{t('Connect2')}</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-10 flex flex-col gap-6 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('name')}
                className="input"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input"
                style={{ textTransform: 'none' }}
                required
              />
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('message')}
              className="textarea"
              required
            />

            <button
              type="submit"
              className="relative btn rounded-full border border-accent/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto md:mx-0"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t('Talk')}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}