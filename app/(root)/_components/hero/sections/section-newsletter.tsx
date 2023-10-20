import CardUser from '@/components/ui/card-user';
import Image from 'next/image';

import { LuPlus } from 'react-icons/lu';

const SectionNewsletter = () => {
  return (
    <section>
      <div className='space-y-10 mb-20'>
        <h5 className='text-purple-700 font-semibold'>* 30 days free trial</h5>
        <h1 className='text-6xl md:text-7xl font-bold capitalize'>
          The best payments experience
        </h1>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          distinctio.
        </p>
        <div className='relative'>
          <input
            type='text'
            className='border-2 border-black bg-transparent outline-none p-4 pr-36 w-full rounded-full'
            placeholder='Enter your email'
          />
          <button
            type='button'
            className='absolute bg-black text-white top-0 right-0 h-full rounded-full px-6'
          >
            Get Started
          </button>
        </div>
      </div>
      <div>
        <h5 className='font-bold mb-5'>Send money to</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <CardUser className='bg-black text-white gap-5 pt-8'>
            <span className='relative before:absolute before:w-8 before:h-8 before:bg-white flex items-center justify-center before:rotate-45 before:rounded-lg'>
              <LuPlus className='text-black relative z-10' />
            </span>
            <h5 className='text-center'>Add New Contact</h5>
          </CardUser>
          <CardUser>
            <div className='relative w-12 h-12 rounded-xl'>
              <Image
                src='https://res.cloudinary.com/jotredev/image/upload/v1697575977/ElementumUI/mujeres/cuchando-musica-sosteniendo-telefono_gjwalk.webp'
                alt='Image'
                fill
                loading='lazy'
                blurDataURL='https://res.cloudinary.com/jotredev/image/upload/v1697575977/ElementumUI/mujeres/cuchando-musica-sosteniendo-telefono_gjwalk.webp'
                className='object-cover rounded-xl'
              />
            </div>
            <h5 className='text-center'>
              Steve <br /> Donald
            </h5>
          </CardUser>
          <CardUser>
            <div className='relative w-12 h-12 rounded-xl'>
              <Image
                src='https://res.cloudinary.com/jotredev/image/upload/v1697568580/ElementumUI/mujeres/feliz-mujer-madura-al-aire-libre_tsjdsm.webp'
                alt='Image'
                fill
                loading='lazy'
                blurDataURL='https://res.cloudinary.com/jotredev/image/upload/v1697568580/ElementumUI/mujeres/feliz-mujer-madura-al-aire-libre_tsjdsm.webp'
                className='object-cover rounded-xl'
              />
            </div>
            <h5 className='text-center'>
              Leahal <br /> Nolan
            </h5>
          </CardUser>
        </div>
      </div>
    </section>
  );
};

export default SectionNewsletter;
