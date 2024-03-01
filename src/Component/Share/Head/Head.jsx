import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMailOutline, MdOutlineShoppingBag } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../../../assets/Buyer/home/Branding.svg";
import "./Head.css";
import LogoSearch from "../../LogoSearch/LogoSearch";
import { useWindowSize } from "react-use";
import { ImSearch } from "react-icons/im";

const Head = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <div>
      <div className="navbar fixed top-0 z-[1000] bg-[#FFFFFF] w-full h-[95px]">
        <Link to="/">
          {/* <img className="flex-wrap" src={logo} alt="logo" /> */}
          <h3 className="text-[#FC4308] font-semibold text-2xl w-48">
            Bharat 24/7
          </h3>
        </Link>
        {/* desktop */}
        <div className="navbar-start w-full hidden md:flex">
          <ul className="menu menu-horizontal">
            <li tabIndex={0}>
              <Link className="text-lg font-bold" to="/">
                Categories
              </Link>
            </li>
            <li tabIndex={0}>
              <Link className="text-lg font-bold" to="/">
                Pages
              </Link>
            </li>
            <li tabIndex={1}>
              <Link className="text-lg font-bold" to="/">
                Contact Us
              </Link>
            </li>
            <li tabIndex={1}>
              <Link className="text-lg font-bold" to="/">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-[16px]">
          <div className="flex justify-center items-center md:gap-4">
            {width > 1023 && <LogoSearch />}
          </div>

          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
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
                <div class="relative w-full px-2 py-[16px]">
                  <div class="flex absolute inset-y-0 left-0 items-center px-[16px] pointer-events-none">
                    <ImSearch className="w-[20px] h-[20px]" />
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    class="bg-gray-50 border border-[#CBCBCB] text-[#A7A7A7] text-[14px] rounded-md block w-full pl-10 p-2.5"
                    placeholder="Search"
                    required=""
                  />
                </div>

                <li tabIndex={0}>
                  <details>
                    <summary className="line rounded-none">Categories</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/">Categories</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary className="line rounded-none">Pages</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/">Top Product</Link>
                      </li>
                      <li>
                        <Link to="/">payment</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={1}>
                  <details>
                    <summary className="line rounded-none">Contact Us</summary>
                    <ul className="p-2">
                      <li tabIndex={1}>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={1}>
                  <details>
                    <summary className="line rounded-none">About Us</summary>
                    <ul className="p-2">
                      <li tabIndex={1}>
                        <Link to="/">About Us</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </div>

              <div className="flex flex-col mt-[14px]">
                <Link to="/wishlist">
                  <div className="px-2 flex items-center justify-between">
                    <h1 className="text-[#807E7E] font-[500] text-[20px]">
                      Favourite
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
