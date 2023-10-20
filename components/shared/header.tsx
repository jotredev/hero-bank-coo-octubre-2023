import Logo from '@/components/shared/logo';
import Menu from '@/components/shared/menu';
import Image from 'next/image';

import { LuWallet, LuBell } from 'react-icons/lu';

const Header = () => {
  return (
    <header className='hidden lg:block fixed left-0 top-0 w-full py-5 px-5 md:px-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <section>
          <Logo />
        </section>
        <section>
          <Menu />
        </section>
        <section>
          <ul className='flex items-center gap-6'>
            <li>
              <button type='button'>
                <LuWallet size={20} />
              </button>
            </li>
            <li>
              <button type='button' className='relative'>
                <LuBell size={20} />
                <span className='absolute w-4 h-4 text-[8px] rounded-full bg-orange-600 text-white -top-2 -right-1 flex items-center justify-center z-10'>
                  2
                </span>
              </button>
            </li>
            <li>
              <div className='relative w-8 h-8 rounded-full'>
                <Image
                  src='https://res.cloudinary.com/jotredev/image/upload/v1697568346/ElementumUI/hombres/onrie-ampliamente-esperando-sorpresa_rcgn7i.webp'
                  alt='Image'
                  fill
                  loading='lazy'
                  blurDataURL='https://res.cloudinary.com/jotredev/image/upload/v1697568346/ElementumUI/hombres/onrie-ampliamente-esperando-sorpresa_rcgn7i.webp'
                  className='object-cover rounded-full'
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
