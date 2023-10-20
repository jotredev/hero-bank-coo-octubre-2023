import Image from 'next/image';

import CardUser from '@/components/ui/card-user';

import { LuPlus } from 'react-icons/lu';

const SectionImage = () => {
  return (
    <div>
      <div className='relative w-full h-[80vh]'>
        <Image
          src='https://res.cloudinary.com/jotredev/image/upload/v1697678284/ElementumUI/otros/hand-edit_frwmde.webp'
          alt='Image'
          fill
          className='object-cover'
        />
        <CardUser className='absolute top-1/2 -translate-y-1/2 left-0 flex flex-row items-center gap-4'>
          <div className='relative w-12 h-12 rounded-lg'>
            <Image
              src='https://res.cloudinary.com/jotredev/image/upload/v1697678705/ElementumUI/logos/18_pg8wic.webp'
              alt='Image'
              fill
              className='object-cover rounded-lg'
            />
          </div>
          <div>
            <h5 className='font-bold'>Lyft</h5>
            <p>Debit Card</p>
          </div>
          <h3>-$500</h3>
        </CardUser>
        <CardUser className='absolute top-[30%] right-0 items-start gap-4'>
          <div className='flex items-center justify-between gap-10'>
            <h5 className='font-bold'>Payment Method</h5>
            <LuPlus className='bg-yellow-500 text-white p-1 box-content rounded-full' />
          </div>
          <div>
            <h5 className='font-medium'>**** 5550</h5>
          </div>
        </CardUser>
      </div>
    </div>
  );
};

export default SectionImage;
