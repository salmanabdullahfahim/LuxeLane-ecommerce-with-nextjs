import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { calculatePercentage } from "@/helpers";

const ProductData = ({ product }: ProductProps) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <div className="w-full h-96 overflow-hidden relative group">
          <Image
            src={product?.image}
            alt="product image"
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
          {product?.isNew && (
            <span className="absolute top-2 right-2 bg-white rounded-lg text-sm font-semibold px-2 py-1 group-hover:bg-blue-500 group-hover:text-white ">
              New Arrival
            </span>
          )}
        </div>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p className="font-bold">{product?.title}</p>
          <div className="flex justify-between items-center">
            <div className="px-3 py-1 border-[1px] border-blue-500 rounded-full font-semibold">
              <p>
                {calculatePercentage(product?.price, product?.oldPrice)}% off
              </p>
            </div>
            <div>
              <p>{product?.oldPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
