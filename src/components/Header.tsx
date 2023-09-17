import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { BsCart, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center justify-between md:justify-start md:gap-x-5">
        {/* Logo */}
        <Logo />

        {/* Search box */}
        <div className="w-full hidden md:flex items-center gap-x-1 border-[1px] border-darkText/50 rounded-full px-4 py-1.5 focus-within:border-blue-500 group">
          <BsSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search any Products"
            className="placeholder:text-sm flex-1 outline-none "
          />
        </div>

        {/* signin/signup */}

        {/* Cart */}
      </Container>
    </div>
  );
};

export default Header;
