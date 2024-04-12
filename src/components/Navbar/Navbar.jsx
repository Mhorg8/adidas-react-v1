import TopNavbar from "./TopNavbar";
import logo from "../../assets/logo.png";
import MobileMenu from "../Navbar/MobileMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="relative">
      <div>
        <TopNavbar />
      </div>

      <MobileMenu />

      <div className="hidden md:flex items-center justify-between relative px-3 cursor-pointer">
        <a href="#">
          <img className="w-[100px]" src={logo} alt="" />
        </a>

        <ul className="flex items-center gap-x-4 absolute left-1/2 -translate-x-1/2 ">
          <Link className={"nav-item font-bold text-xl"}>MEN</Link>
          <Link className="nav-item font-bold text-xl">WOMEN</Link>
          <Link className="nav-item font-bold text-xl">KIDS</Link>
          <Link className="nav-item">SALE</Link>
          <Link className="nav-item">3 STRIPE LIFE</Link>
        </ul>
        <div className="flex items-center gap-x-4">
          <div className="relative">
            <input
              className="py-1 pl-3 outline-gray border-none bg-soft-gray"
              type="text"
              placeholder="Search"
            />
            <i className="ri-search-line font-bold text-xl absolute right-1 top-0 cursor-pointer"></i>
          </div>

          <i className="ri-user-3-line font-bold text-2xl cursor-pointer"></i>
          <i className="ri-heart-2-line font-bold text-2xl cursor-pointer"></i>
          <Link to="/shoppingPage">
            <i className="ri-shopping-bag-2-line font-bold text-2xl cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
