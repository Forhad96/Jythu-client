import { AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import searchIcon from "/src/assets/images/search.svg";
import cartIcon from "/src/assets/images/cart.svg";
import { FaAngleDown } from "react-icons/fa";
export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="relative md:hidden">
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-between gap-2 ">
          <div>
            <img src={cartIcon} alt="" />
          </div>
          <img src={searchIcon} alt="" />
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-max  bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col gap-1 mx-2 my-4 cursor-pointer">
            {menuItems.map((item, index) => (
              <div key={index} className=" group inline-block">
                <a
                  href={item.href}
                  className="text-[#0D141C] font-medium hover:text-green-500 transition mx-2 flex items-center gap-1"
                >
                  {item.label}
                  {item?.icon}
                </a>
                {item.subItems && (
                  <div className="transition-all  left-0 hidden group-hover:block bg-white shadow-md py-2 px-4 rounded-md mt-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={`${index}-${subIndex}`}
                        href={subItem.href}
                        className="block text-gray-700 hover:text-green-500 py-1"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="flex items-center gap-1 text-white text-sm font-semibold px-5 py-3 rounded-3xl bg-gradient-to-t from-green-400 to-teal-500">
              Get quote <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
  const menuItems = [
    { label: "Home", href: "#", icon: <FaAngleDown /> },
    {
      label: "About Us",
      href: "#",
      subItems: [
        { label: "Page 1", href: "#" },
        { label: "Page 2", href: "#" },
      ],
    },
    {
      label: "Pages",
      href: "#",
      subItems: [
        { label: "Page 1", href: "#" },
        { label: "Page 2", href: "#" },
      ],
      icon: <FaAngleDown />,
    },
    {
      label: "Service",
      href: "#",
      subItems: [
        { label: "Service 1", href: "#" },
        { label: "Service 2", href: "#" },
      ],
      icon: <FaAngleDown />,
    },
    {
      label: "News & Event",
      href: "#",
      subItems: [
        { label: "News 1", href: "#" },
        { label: "Event 1", href: "#" },
      ],
      icon: <FaAngleDown />,
    },
  ];