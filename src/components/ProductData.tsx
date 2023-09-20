"use client";
import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { calculatePercentage } from "@/helpers";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

const ProductData = ({ product }: ProductProps) => {
  const starArray = Array.from({ length: product?.rating }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <IoIosStar />
    </span>
  ));
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-sm">
      <div>
        <Link href={{ pathname: "/product", query: { _id: product?._id } }}>
          <div className="w-full h-96 overflow-hidden relative group">
            <Image
              src={product?.image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {product?.isNew && (
              <span className="absolute top-2 right-2 bg-white rounded-lg text-sm font-semibold px-2 py-1 group-hover:bg-black group-hover:text-white ">
                New Arrival
              </span>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p className="font-semibold">{product?.title}</p>
          <div className="flex justify-between items-center">
            <div className="px-3 py-1 border-[1px] border-slate-500 rounded-full">
              <p>
                {calculatePercentage(product?.price, product?.oldPrice)}% off
              </p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-slate-500 text-sm line-through">
                ${product?.oldPrice}
              </p>
              <p className="font-semibold">${product?.price}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* cart button */}
            <button className="px-4 py-2 text-sm tracking-wide bg-black hover:bg-black/80 text-white rounded-full ">
              Add to Cart
            </button>
            {/* star */}
            <div className="flex items-center gap-x-1">{starArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
