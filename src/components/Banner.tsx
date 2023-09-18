"use client";
import Slider from "react-slick";
import banner1 from "@/images/bannerone.jpg";
import banner2 from "@/images/bannertwo.jpg";
import banner3 from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";

const Banner = () => {
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div>
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
        <div>
          <Image
            src={banner1}
            alt="banner one"
            className="w-ful h-full relative"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
