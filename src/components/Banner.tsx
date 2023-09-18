"use client";
import Slider from "react-slick";
import banner1 from "@/images/bannerone.jpg";
import banner2 from "@/images/bannertwo.jpg";
import banner3 from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="bg-slate-100 hover:bg-white rounded-full cursor-pointer">
        <PiCaretLeftLight />
      </div>
    );
  };
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div>
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-ful h-full relative">
          <Image src={banner1} alt="banner 3" />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-ful h-full relative">
          <Image src={banner2} alt="banner2" />
          <BannerText title="Seasonal Offer" />
        </div>
        <div className="w-ful h-full relative">
          <Image src={banner3} alt="banner 3" />
          <BannerText title="Only for men" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
