"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            eius eaque molestias nostrum maxime dolor! Architecto atque
            voluptas. Lorem ipsum dolor sit amet.
          </p>

          <div className="flex items-center gap-x-4">
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsYoutube />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsGithub />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsLinkedin />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsFacebook />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsReddit />
            </span>
          </div>
        </div>
        <div>
          <p className="text-lg">Latest Products</p>
          <ul className="mt-2 flex flex-col gap-y-4 text-sm font-light">
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
