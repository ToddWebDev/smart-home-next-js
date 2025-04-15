import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-semibold text-gray-900 dark:text-white'
        >
          SJ Smart Home
        </Link>
        <nav className='space-x-4'>
          <Link
            href='/services'
            className='text-sm text-gray-600 dark:text-gray-300 hover:underline'
          >
            Services
          </Link>
          <Link
            href='/about'
            className='text-sm text-gray-600 dark:text-gray-300 hover:underline'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='text-sm text-gray-600 dark:text-gray-300 hover:underline'
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
