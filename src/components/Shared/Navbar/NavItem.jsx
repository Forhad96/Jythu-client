
import { FaAngleDown } from "react-icons/fa";
const NavItem = () => {
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
    return (
      <div className="hidden md:block">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group inline-block">
            <a
              href={item.href}
              className="text-[#0D141C] font-medium hover:text-green-500 transition mx-2 flex items-center gap-1"
            >
              {item.label}
              {item?.icon}
            </a>
            {item.subItems && (
              <div className="absolute transition left-2 w-max hidden group-hover:block bg-white shadow-md py-2 px-4 rounded-md mt-2">
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
      </div>
    );
};
export default NavItem;



