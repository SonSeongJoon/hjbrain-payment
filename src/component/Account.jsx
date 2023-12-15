import React from 'react';
import { BsCaretDownFill, BsFillPeopleFill } from 'react-icons/bs';

export default function Account() {
  return (
    <div className='flex w-[130px] h-[50px] shadow-lg text-sm rounded-xl items-center justify-center mr-[20px] bg-gray-100 border border-gray-300'>
      <BsFillPeopleFill size={24} className='mr-[12px]' />
      <p className='mr-[10px]'>손성준</p>
      <BsCaretDownFill />
    </div>
  );
}
