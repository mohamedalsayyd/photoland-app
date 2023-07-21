import React, { useContext, useState } from "react";
import { SlBag } from "react-icons/sl";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import SearchForm from "./SearchForm";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className=" container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div> */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          <div className="flex items-center gap-x-[10px] z-50">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              <div
                className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]
              "
              >
                {itemsAmount}
              </div>
            </div>
            <div
              className={`
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
