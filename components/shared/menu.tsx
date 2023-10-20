import Link from 'next/link';

import { LuChevronDown } from 'react-icons/lu';

const Menu = () => {
  return (
    <ul className='flex flex-col lg:flex-row lg:items-center gap-5'>
      <li>
        <Link
          href='/'
          className='border-b-2 border-transparent hover:border-black transition-colors duration-300 py-2'
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='border-b-2 border-transparent hover:border-black transition-colors duration-300 py-2'
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='flex items-center gap-3 border-b-2 border-transparent hover:border-black transition-colors duration-300 py-2'
        >
          Features
          <LuChevronDown />
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='border-b-2 border-transparent hover:border-black transition-colors duration-300 py-2'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
