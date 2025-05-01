"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LogoIcon from "@/components/LogoIcon";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path
      ? "text-gray-950 dark:text-gray-100"
      : "text-gray-500 dark:text-gray-400";

  return (
    <header className="sticky top-0 z-50 border-gray-200 bg-white md:border-b dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-x-2 text-xl font-semibold text-gray-900 dark:text-white"
        >
          <LogoIcon />
          SJ Smart Home
        </Link>
        <button
          type="button"
          id="open-menu"
          className="inline-flex items-center rounded-lg border border-blue-700 p-1.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none md:hidden dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
        >
          <svg
            className="h-[28px] w-[28px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>

          <span className="sr-only">Open menu</span>
        </button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-xs md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
        <nav
          id="menu"
          className={`fixed top-0 z-40 ${
            isMenuOpen ? "right-0" : "-right-full"
          } h-screen min-w-3xs border-l border-gray-200 bg-white transition-[right] duration-300 ease-out md:relative md:right-auto md:h-auto md:border-l-0 dark:border-gray-700 dark:bg-gray-900`}
        >
          <ul className="flex flex-col space-y-4 p-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-4 md:p-0">
            <li>
              <button
                type="button"
                id="close-menu"
                className="inline-flex items-center rounded-lg border border-blue-700 p-1.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none md:hidden dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="menu"
              >
                <svg
                  className="h-[28px] w-[28px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>

                <span className="sr-only">Close menu</span>
              </button>
            </li>
            <li>
              <Link href="/" className={`hover:underline ${isActive("/")}`}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:underline ${isActive("/about")}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:underline ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
