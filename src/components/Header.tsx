"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { BsCart, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center justify-between md:justify-start md:gap-x-5">
        {/* Logo */}
        <Logo />

        {/* Search box */}
        <div className="w-full hidden md:flex items-center gap-x-2 border-[1px] border-darkText/50 rounded-full px-4 py-1.5 focus-within:border-blue-500 group">
          <BsSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search any Products"
            className="placeholder:text-sm flex-1 outline-none "
          />
        </div>

        {/* signin/signup */}

        <div
          onClick={() => signIn()}
          className="flex justify-center items-center bg-bgLight text-gray-500 p-1.5 rounded-full border-[1px] border-gray-200 hover:border-blue-500 hover:bg-white duration-200 cursor-pointer"
        >
          <AiOutlineUser className="text-2xl" />
          <p className="font-semibold text-sm">Login/SignUp</p>
        </div>

        {/* Cart */}
        <div className="flex justify-center items-center bg-black hover:bg-slate-950 text-slate-100 hover:text-white rounded-full px-4 py-1.5 border-[1px] border-black hover:border-blue-500 duration-200 cursor-pointer relative">
          <BsCart className="text-xl" />
          <p className="font-semibold text-sm">$0.00</p>
          <span className="bg-white rounded-full text-blue-600 text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex justify-center items-center shadow-xl shadow-black">
            0
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
