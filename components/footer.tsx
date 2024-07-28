import React from 'react'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">
      <div className='flex flex-col items-center '>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level ?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how can I help you achieve your goals.</p>
        <a href="mailto:khizaruddins@gmail.com">
          <MagicButton title='Lets get in touch' icon={<FaLocationArrow/>} position='right'></MagicButton>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col items-center justify-between'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Khizaruddin Syed</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(profile => (
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
              <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer