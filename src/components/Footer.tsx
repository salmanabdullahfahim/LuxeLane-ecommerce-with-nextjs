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
    <div className="w-ful bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            eius eaque molestias nostrum maxime dolor! Architecto atque voluptas
            ad modi, magni odio, minus eaque accusantium.
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
      </Container>
    </div>
  );
};

export default Footer;
