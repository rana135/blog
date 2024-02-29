import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMailOutline, MdOutlineShoppingBag } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../../../assets/Buyer/home/Branding.svg";
import "./Head.css";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar fixed top-0 z-[1000] bg-[#C9D7E0] h-[95px]">
        <div className="navbar-start">
          <Link to="/">
            {/* <img className="flex-wrap" src={logo} alt="logo" /> */}
            <h3 className="text-red-700 font-semibold text-2xl">Bharat 24/7</h3>
          </Link>
        </div>
        {/* desktop */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <li tabIndex={0}>
              <Link className="text-lg" to="/">
                Store
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-lg">Product</summary>
                <ul className="p-0">
                  <li>
                    <Link className="text-md font-bold" to="/">
                      Submenu
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-bold" to="/">
                      Submenu
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-lg">Pages</summary>
                <ul className="p-0">
                  <li>
                    <Link className="text-md font-bold" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-bold" to="/payment">
                      payment
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-bold" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="text-md font-bold" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <Link className="text-lg" to="/general-settings">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-[16px]">
          <div className="flex justify-center items-center md:gap-4">
            {/* <button>
              <div className="indicator">
                <IoMdNotificationsOutline className="navBtn" />
                <span className="badge badge-xs badge-primary indicator-item">
                  5
                </span>
              </div>
            </button> */}

            <Link className="text-lg" to="/general-settings">
              <RiUser3Line className="navBtn" />
            </Link>
            <Link to="/shoppingCart">
              <div className="nav-shopping-cart">
                <button>
                  <MdOutlineShoppingBag className="navBtn hidden md:block" />
                </button>
                <button className="cart-circle hidden md:block">3</button>
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="nav-shopping-cart">
                <button>
                  <FaRegHeart className="navBtn hidden md:block" />
                </button>
                <button className="cart-circle hidden md:block">3</button>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => navigate("/login")}
              class="flex min-w-[90px] items-center justify-center flex-none px-2 py-[8px] rounded-lg font-medium bg-[#121212] text-white text-[14px]"
            >
              Sign in
            </button>
          </div>
          {/* Mobile */}
          <details className="dropdown dropdown-end md:hidden">
            <summary className="swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FAFAFB] rounded-md w-[90vw] text-[#121212]"
            >
              <div className="flex flex-col">
                <div className="navbar-start p-2 flex">
                  <Link to="/">
                    {/* <img className="image-full" src={logo} alt="logo" /> */}
                    <h3 className="text-red-700 font-semibold text-2xl">
                      Bharat 24/7
                    </h3>
                  </Link>
                </div>
                {/* <div class="relative w-full px-2 py-[16px]">
                  <div class="flex absolute inset-y-0 left-0 items-center px-[16px] pointer-events-none">
                    <IoIosSearch className="w-[24px] h-[24px]" />
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    class="bg-gray-50 border border-[#CBCBCB] text-[#A7A7A7] text-[14px] rounded-md block w-full pl-10 p-2.5"
                    placeholder="Search"
                    required=""
                  />
                </div> */}
                <li tabIndex={0}>
                  <details>
                    <summary className="line rounded-none">Shop</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/">Store</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary className="line rounded-none">Product</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/">Submenu</Link>
                      </li>
                      <li>
                        <Link to="/">Submenu</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary className="line rounded-none">Pages</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/payment">payment</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/blogs">Blogs</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={1}>
                  <details>
                    <summary className="line rounded-none">Dashboard</summary>
                    <ul className="p-2">
                      <li tabIndex={1}>
                        <Link to="/general-settings">Seller Dashboard</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </div>

              <div className="flex flex-col mt-[100px]">
                <Link to="/shoppingCart">
                  <div className="px-2 flex items-center justify-between">
                    <h1 className="text-[#807E7E] font-[500] text-[14px]">
                      Cart
                    </h1>
                    <div className="nav-shopping-cart">
                      <button>
                        <MdOutlineShoppingBag className="navBtn" />
                      </button>
                      <button className="cart-circle">3</button>
                    </div>
                  </div>
                </Link>
                <Link to="/wishlist">
                  <div className="px-2 flex items-center justify-between mt-[16px]">
                    <h1 className="text-[#807E7E] font-[500] text-[14px]">
                      Wishlist
                    </h1>
                    <div className="nav-shopping-cart">
                      <button>
                        <FaRegHeart className="navBtn" />
                      </button>
                      <button className="cart-circle">3</button>
                    </div>
                  </div>
                </Link>
              </div>
              <span
                className={`w-full mt-[24px] mb-[19px] border border-[rgb(234,234,234)]`}
              ></span>

              <button
                onClick={() => navigate("/login")}
                class="flex items-center justify-center flex-none px-2 py-[8px] rounded-lg font-medium bg-[#121212] text-white text-[14px]"
              >
                Sign in
              </button>
              <div className="flex justify-start items-center gap-x-[16px] mt-[24px] mb-[16px] pl-2">
                <div className="social-btn-circle">
                  <FiFacebook className="social-btn" />
                </div>
                <div className="social-btn-circle">
                  <GrInstagram className="social-btn" />
                </div>
                <div className="social-btn-circle">
                  <FiTwitter className="social-btn" />
                </div>
                <div className="social-btn-circle">
                  <MdOutlineMailOutline className="social-btn" />
                </div>
              </div>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Head;