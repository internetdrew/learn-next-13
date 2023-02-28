import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='p-5 bg-blue-500'>
      {['home', 'todos', 'search'].map((page, i) => (
        <Link
          key={i}
          href={`/${page === 'home' ? '' : page}`}
          className='px-2 py-1 bg-white text-blue-500 rounded-lg mr-2'
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Header;
