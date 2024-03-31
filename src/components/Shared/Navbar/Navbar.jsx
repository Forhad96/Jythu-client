import Container from '../Container'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#CDF7E0] z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />
            {/* Dropdown Menu */}
            {/* <MenuDropdown /> */}
            <div></div>

            <div>
              <button className="flex items-center gap-1 text-white text-sm font-semibold px-5 py-3 rounded-3xl bg-gradient-to-t from-green-400 to-teal-500">
                Get quote <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar
