import { useState } from "react";
import logo from "../../assets/logo.png";
function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  function handleSearchBox() {
    setOpenSearch((prev) => !prev);
  }
  return (
    <>
      {openSearch && <SearchBox handleSearchBox={handleSearchBox} />}
      <div className="flex md:hidden items-center justify-between px-5">
        <div className="flex gap-x-4 items-center">
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            <i className="ri-menu-line font-bold text-2xl "></i>
          </button>
          <i className="ri-heart-2-line font-bold text-2xl cursor-pointer"></i>
        </div>

        <ul className={openMenu ? "show-menu py-0" : "hidden"}>
          <div className="flex items-center justify-between">
            <img src={logo} className="w-[100px] " alt="adidas-logo" />
            <i
              onClick={() => setOpenMenu(false)}
              className="ri-close-line font-bold text-2xl cursor-pointer"></i>
          </div>
          <li className="nav-item font-bold text-xl">MEN</li>
          <li className="nav-item font-bold text-xl">WOMEN</li>
          <li className="nav-item font-bold text-xl">KIDS</li>
          <li className="nav-item">SALE</li>
          <li className="nav-item">3 STRIPE LIFE</li>
        </ul>

        <div>
          <a href="/">
            <img className="w-[100px]" src={logo} alt="" />
          </a>
        </div>

        <div className="flex items-center gap-x-4">
          <i className="ri-user-3-line font-bold text-2xl cursor-pointer"></i>
          <i
            onClick={() => handleSearchBox()}
            className="ri-search-line font-bold text-xl cursor-pointer"></i>

          <i className="ri-shopping-bag-2-line font-bold text-2xl cursor-pointer"></i>
        </div>
      </div>
    </>
  );
}
function SearchBox({ handleSearchBox }) {
  return (
    <div className="w-full h-[100vh] animate-fadeIn flex items-start justify-start z-20">
      <div className="w-full relative">
        <input
          className="w-full py-3 px-3 bg-soft-gray border-b border-gray"
          type="text"
          placeholder="Search ..."
        />
        <i
          onClick={() => handleSearchBox()}
          className="ri-search-line font-bold text-2xl absolute right-2 top-2 cursor-pointer z-30"></i>
      </div>
    </div>
  );
}
SearchBox.propTypes = {
  handleSearchBox: Function,
};

export default Menu;
