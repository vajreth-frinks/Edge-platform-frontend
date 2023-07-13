import { useEffect, useState } from "react";
import {
  ArrowLeftCircle,
  Cpu,
  Database,
  Settings,
  Tag,
  Zap,
} from "react-feather";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const WithSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const params = useParams();

  const menus = [
    {
      name: "Datasets",
      icon: <Database />,
      url: `/projects/${params.projectId}`,
    },
    {
      name: "Project Configuration",
      icon: <Settings />,
      url: `/configuration/${params.projectId}`,
    },
    {
      name: "Annotation",
      icon: <Tag />,
      url: "/",
    },
    {
      name: "AI Models",
      icon: <Cpu />,
      url: "/",
    },
    {
      name: "Instances",
      icon: <Zap />,
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
  const rotateClassName = isOpen ? "" : "rotate-180";

  return (
    <nav className="flex h-full">
      <div
        className={`${withClassName} p-2 border-r-1 border-ink transition-all`}
      >
        <div className="flex justify-end border-b-1 border-ink p-4 hover:bg-secondary-light transition-all ">
          <ArrowLeftCircle
            className={`cursor-pointer transition-all  ${rotateClassName}`}
            onClick={handleToggle}
          />
        </div>

        <ul>
          {menus.map((t) => (
            <NavLink
              to={t.url}
              key={t.name}
              className={({ isActive, isPending }) => {
                let className = "hover:bg-secondary-light transition-all flex";

                if (isPending) {
                  className += " pending";
                }
                if (isActive) {
                  className += " bg-secondary-light";
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
