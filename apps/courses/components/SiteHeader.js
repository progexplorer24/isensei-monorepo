import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Dropdown from "@/components/Dropdown";

const SiteHeader = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
      <div className="flex justify-between px-4 py-3 xl:w-72 xl:justify-center xl:bg-gray-900 xl:py-5">
        <div className="text-2xl font-bold text-white sm:text-3xl">iSensei</div>
        <div className="flex sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="px-2 text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between`}
      >
        <div className="hidden xl:relative xl:block xl:w-full xl:max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="block w-full rounded-lg border border-transparent bg-gray-200 py-2 pl-10 pr-4 text-gray-900 focus:border-gray-300 focus:bg-white focus:outline-none"
            placeholder="Search by keywords"
          />
        </div>
        <div className="sm:flex sm:items-center">
          <div className="border-b border-gray-800 px-2 pt-2 pb-5 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
            <Link href="/">
              <a className="block rounded px-3 py-1 font-semibold text-white hover:bg-gray-800 sm:px-2 sm:text-sm xl:text-gray-900 xl:hover:bg-gray-200">
                My Learning
              </a>
            </Link>
            <Link href="/">
              <a className="mt-1 block rounded px-3 py-1 font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:ml-2 sm:px-2 sm:text-sm xl:text-gray-900 xl:hover:bg-gray-200">
                Notifications
              </a>
            </Link>
            <Link href="/">
              <a className="mt-1 block rounded px-3 py-1 font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:ml-2 sm:px-2 sm:text-sm xl:text-gray-900 xl:hover:bg-gray-200">
                Messages
              </a>
            </Link>
          </div>
          <div className="relative px-5 py-5 sm:ml-4 sm:py-0 sm:px-0">
            <div className="flex items-center sm:hidden">
              <Image
                className="rounded-full border-0 border-transparent object-cover"
                width={45}
                height={45}
                src="/static/images/avatar.png"
                alt=""
              />
              <span className="ml-4 font-semibold text-gray-200 sm:hidden">
                Rick S.
              </span>
            </div>
            <div className="mt-5 sm:hidden">
              <a
                href="#account"
                className="block text-gray-400 hover:text-white"
              >
                Account settings
              </a>
              <a
                href="#support"
                className="mt-3 block text-gray-400 hover:text-white"
              >
                Support
              </a>
              <a
                href="#sign-out"
                className="mt-3 block text-gray-400 hover:text-white"
              >
                Sign out
              </a>
            </div>
            <Dropdown
              class="hidden sm:block"
              trigger={() => (
                <span
                  // ring-2 lg:ring-gray-100 ring-offset-1 ring-offset-gray-100
                  className={`hidden h-11 w-11 overflow-hidden rounded-full border-4 border-gray-900 bg-gray-900 ring-1 ring-gray-300 ring-offset-2 ring-offset-gray-900 sm:block xl:border-gray-50 xl:bg-gray-50 xl:ring-offset-gray-50`}
                >
                  <Image
                    width={45}
                    height={45}
                    className="h-full w-full object-cover"
                    src="/static/images/avatar.png"
                    alt=""
                  />
                </span>
              )}
              dropdown={() => (
                <div className="mt-3 w-48 rounded-lg bg-white py-2 shadow-xl xl:border">
                  <a
                    href="#account"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    Account settings
                  </a>
                  <a
                    href="#support"
                    className="mt-0 block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    Support
                  </a>
                  <a
                    href="#sign-out"
                    className="mt-0 block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              )}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
