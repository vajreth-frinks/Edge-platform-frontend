import React, { useState } from "react";
import Logo from "../logo";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/frinks_logo.png";

const listLink = [
  {
    to: "/instances",
    children: "Instances",
  },
  {
    to: "/PI",
    children: "Peripherals & Integrations",
  },
  {
    to: "/analytics",
    children: "System Health Monitoring",
  },
  {
    to: "/marketplace",
    children: "Analytics & Reports",
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
        <div className="flex items-center justify-between  gap-y-2">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-[130px]">
              <Logo logo={logo}/>
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
