// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

import { useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { t } = useTranslation('common');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        console.log('Message sent');
      } else {
        console.error('Error sending message');
      }
    };
  
  return (
    <div className='min-h-screen bg-grey'>
      <div className='container mx-auto py-56 xl:py-72 md:py-56 lg:py-48 sm:py-56 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center'
          >
            {t('Connect1')} <span className='text-accent'>{t('Connect2')}</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder={t('name')} className='input' required/>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='input' style={{ textTransform: 'none' }} required/>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t('message')} className='textarea' required></textarea>
            <button type="submit" className='btn rounded-full border border-accent/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
              {t('Talk')}
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
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