import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12'>
      <div className='max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} South Jordan Smart Home Services. All
          rights reserved.
        </span>
        <div className='flex mt-4 space-x-6 md:mt-0'>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
          >
            Terms of Service
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
