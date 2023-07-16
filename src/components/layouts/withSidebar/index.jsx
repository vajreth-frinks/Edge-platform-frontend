import { useEffect, useState } from "react";

import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

import Logo from "../../ui-elements/logo";
import logoController from "../../../assets/cpu.png"
import logoCamera from "../../../assets/camera.svg"
import logoHMI from "../../../assets/O.png"
import logoTriggers from "../../../assets/airplay.png"

const WithSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const params = useParams();

  const menus = [
    {
      name: "Controller",
      icon:  <Logo logo={logoController}/>,
      url: `/PI/controller`,
    },
    {
      name: "Camera",
      icon: <Logo logo={logoCamera} />,
      url: `/configuration/${params.projectId}`,
    },
    {
      name: "HMI",
      icon: <Logo logo={logoHMI} />,
      url: "/",
    },
    {
      name: "Triggers",
      icon: <Logo logo={logoTriggers} />,
      url: "/",
    },
   
  ];

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    if (location.pathname.includes("/configuration/")) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const withClassName = isOpen ? "w-[247px]" : "w-[76px]";
  const hiddenClassName = isOpen ? "visible" : "hidden";
 

  return (
    <nav className="flex h-full">
      <div
        className={`${withClassName} p-2 border-r-1 border-ink transition-all`}
      >
        

        <ul>
          {menus.map((t) => (
            <NavLink
              to={t.url}
              key={t.name}
              className={({ isActive, isPending }) => {
                let className = "hover:bg-primary-lighter transition-all flex";

                if (isPending) {
                  className += " pending";
                }
                if (isActive) {
                  className += " bg-primary-lighter";
                }

                return className;
              }}
            >
              <li className="flex gap-4 p-4 border-b-1 border-ink cursor-pointer ">
                <div className="text-black">{t.icon}</div>
                <div className={`${hiddenClassName} transition-all w-full`}>
                  <div className="w-[154px] text-black">{t.name}</div>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex-grow-[1] p-4 pr-0 h-full">
        <Outlet />
      </div>
    </nav>
  );
};

export default WithSideBar;
