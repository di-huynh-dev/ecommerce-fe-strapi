import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", url: "/categories" },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = (show: any) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <li key={item.id} className="cursor-pointer">
            <Link
              href={item.url}
              className="relative inline-block text-black  before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-black  before:transition-all before:duration-300 hover:before:w-full"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
