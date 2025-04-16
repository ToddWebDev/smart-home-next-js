import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-6 md:flex-row md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} South Jordan Smart Home Services. All
          rights reserved.
        </span>
        <div className="mt-4 flex space-x-6 md:mt-0 md:justify-end">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
