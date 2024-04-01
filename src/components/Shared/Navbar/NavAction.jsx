import searchIcon from "/src/assets/images/search.svg";
import cartIcon from "/src/assets/images/cart.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
const NavAction = () => {
  return (
    <div className="md:flex items-center justify-between gap-2 hidden">
      <div>
        <img src={cartIcon} alt="" />
      </div>
      <img src={searchIcon} alt="" />

      <button className="flex items-center gap-1 text-white text-sm font-semibold px-5 py-3 rounded-3xl bg-gradient-to-t from-green-400 to-teal-500">
        Get quote <AiOutlineArrowRight />
      </button>
    </div>
  );
};
export default NavAction;
