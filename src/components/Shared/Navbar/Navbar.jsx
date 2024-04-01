import Container from "../Container";
import Logo from "../Logo";
import NavItem from "./NavItem";
import NavAction from "./NavAction";
import { MenuMobile } from "./NavMobile";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#CDF7E0] z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />
            {/* NavItem */}
            <NavItem />
            {/* NavAction */}
            <NavAction />
            {/* mobile nav */}
            <MenuMobile/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
