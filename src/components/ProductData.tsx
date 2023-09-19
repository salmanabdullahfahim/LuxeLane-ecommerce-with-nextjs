import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";

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
        </div>
      </div>
    </div>
  );
};

export default ProductData;
