import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NAvbar = () => {
  const [open, setOpen] = useState(false);
  const routeList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="bg-indigo-800 text-white">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          )}
        </span>
      </div>
      <ul className={`md:flex absolute bg-indigo-800 pl-8 py-2 md:static  ${open ? "top-6 ": "-top-96" }`}>
        {routeList.map((route) => (
          <Link route={route} key={route.id} />
        ))}
      </ul>
    </nav>
  );
};

export default NAvbar;
