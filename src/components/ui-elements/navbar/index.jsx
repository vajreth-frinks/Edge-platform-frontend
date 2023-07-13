import React, { useState } from "react";
import Logo from "../logo";
import { Link, NavLink } from "react-router-dom";

const listLink = [
  {
    to: "/projects",
    children: "Projects",
  },
  {
    to: "/teams",
    children: "Teams",
  },
  {
    to: "/analytics",
    children: "Analytics",
  },
  {
    to: "/marketplace",
    children: "Marketplace",
  },
  {
    to: "/download_frink_ai_edge",
    children: (
      <>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M8.33421 17.7083L12.5009 21.875M12.5009 21.875L16.6675 17.7083M12.5009 21.875V12.5M21.7509 18.8437C22.6565 18.2069 23.3356 17.2981 23.6897 16.2491C24.0438 15.2001 24.0544 14.0656 23.72 13.0102C23.3857 11.9548 22.7237 11.0334 21.8301 10.3797C20.9366 9.72607 19.858 9.37413 18.7509 9.37499H17.4384C17.1251 8.15403 16.5389 7.02004 15.7239 6.05841C14.9089 5.09678 13.8864 4.33255 12.7334 3.82328C11.5803 3.314 10.3268 3.07294 9.06705 3.11824C7.80734 3.16354 6.57433 3.49402 5.46083 4.08481C4.34733 4.6756 3.38236 5.51129 2.63857 6.52898C1.89478 7.54667 1.39156 8.71983 1.16677 9.96015C0.941991 11.2005 1.00151 12.4756 1.34086 13.6896C1.6802 14.9036 2.29052 16.0248 3.12588 16.9687"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download Frinks AI Edge
      </>
    ),
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  return (
    <nav className="bg-gray-primary border-b border-sky-base h-[62px]">
      <div className="mx-auto w-full px-4 py-2">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-[130px]">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-4">
                <MenuLink />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-ink text-lg font-bold">
                    Maruti Suzuki
                  </span>
                  <div>
                    <button
                      id="dropdownLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto"
                    >
                      <div className="h-8 w-8 rounded-full bg-brands-twitter text-white flex items-center justify-center font-bold border border-sky-light">
                        A
                      </div>
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${openMenu ? "block" : "hidden"}`} id="mobile-menu">
        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <MenuLink />
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex flex-col gap-y-2 px-5">
            <div className="relative">
              <div className="flex items-center gap-6">
                <span className="text-ink text-lg font-bold">
                  Maruti Suzuki
                </span>
                <div>
                  <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <div className="h-8 w-8 rounded-full bg-brands-twitter text-white flex items-center justify-center font-bold border border-sky-light">
                      A
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <Link
              to="#"
              className="text-ink-lighter hover:text-primary hover:svg-stroke-primary hover:underline hover:underline-offset-8 rounded-md px-3 py-2 text-sm font-medium flex items-center gap-1"
            >
              Your Profile
            </Link>
            <Link
              to="#"
              className="text-ink-lighter hover:text-primary hover:svg-stroke-primary hover:underline hover:underline-offset-8 rounded-md px-3 py-2 text-sm font-medium flex items-center gap-1"
            >
              Settings
            </Link>
            <Link
              to="#"
              className="text-ink-lighter hover:text-primary hover:svg-stroke-primary hover:underline hover:underline-offset-8 rounded-md px-3 py-2 text-sm font-medium flex items-center gap-1"
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MenuLink = () => {
  return (
    <>
      {listLink.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) =>
            `${
              isActive ? "text-primary border-b-primary" : "text-ink-lighter"
            } p-2.5 border-b-2 border-transparent hover:border-b-primary text-lg font-medium hover:text-primary flex items-center gap-1`
          }
        >
          {link.children}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
