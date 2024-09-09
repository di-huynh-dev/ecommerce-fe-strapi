import React from "react";
import { FiZap } from "react-icons/fi";

type MenuItemsType = {
  title: string;
  items: {
    subtitle: string;
    href: string;
  }[];
}[];

const menuItems: MenuItemsType = [
  {
    title: "Platform",
    items: [
      {
        subtitle: "Analytics",
        href: "/analytics",
      },
      {
        subtitle: "Planning",
        href: "/analytics",
      },
      {
        subtitle: "Collaboration",
        href: "/analytics",
      },
      {
        subtitle: "Data Management",
        href: "/analytics",
      },
      {
        subtitle: "Integrations",
        href: "/analytics",
      },
      {
        subtitle: "Security",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        subtitle: "Customer",
        href: "/analytics",
      },
      {
        subtitle: "Strategy Finance",
        href: "/analytics",
      },
      {
        subtitle: "Ebooks & Guides",
        href: "/analytics",
      },
      {
        subtitle: "Webinars & Events",
        href: "/analytics",
      },
      {
        subtitle: "Postcast & Videos",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        subtitle: "Financial",
        href: "/analytics",
      },
      {
        subtitle: "Investors & CEOs",
        href: "/analytics",
      },
      {
        subtitle: "Revenue Operations",
        href: "/analytics",
      },
      {
        subtitle: "Sales & Marketing",
        href: "/analytics",
      },
      {
        subtitle: "Human Resources",
        href: "/analytics",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        subtitle: "Customer",
        href: "/analytics",
      },
      {
        subtitle: "Strategy Finance",
        href: "/analytics",
      },
      {
        subtitle: "Ebooks & Guides",
        href: "/analytics",
      },
      {
        subtitle: "Webinars & Events",
        href: "/analytics",
      },
      {
        subtitle: "Postcast & Videos",
        href: "/analytics",
      },
      {
        subtitle: "Matrics Catelog",
        href: "/analytics",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full border-t-[2px] md:text-base text-sm bg-white">
      <div className="md:py-20 py-10 align-element">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-y-6 justify-items-center md:text-left text-center">
          <div className="md:space-y-6 space-y-2">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-lg">Hybrbase</span>
            </div>
            <div>
              <span>
                Technology Park <br />
                8-14 Marie Curie Street <br />
                08042 Barcelona
              </span>
            </div>
            <div>
              <a
                href="mailto:gostock@example.com"
                target="_top"
                className="font-bold underline"
              >
                hybrbase@example.com
              </a>
            </div>
          </div>
          {menuItems.map((item) => {
            return (
              <div key={item.title} className="space-y-6">
                <div className="font-bold">{item.title}</div>
                <div>
                  <ul>
                    {item.items.map((item) => {
                      return (
                        <li key={item.subtitle} className="my-2">
                          <a
                            href={item.href}
                            className="relative inline-block text-black  before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-black  before:transition-all before:duration-300 hover:before:w-full"
                          >
                            {item.subtitle}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black">
        <p className="text-center uppercase text-white py-4">
          @ 2022 copyright - GoStock
        </p>
      </div>
    </footer>
  );
};

export default Footer;
