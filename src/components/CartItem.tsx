import React from "react";
import { useSelector } from "react-redux";
import { Products, stateProps } from "../../type";
import Image from "next/image";

const CartItem = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);
  console.log(productData);
  return (
    <div>
      <div className="flex items-center justify-between bg-neutral-100 shadow-md p-2 font-semibold">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex items-center justify-center">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>

      <div className="flex flex-col gap-y-2 mt-2">
        {productData.map((product: Products) => (
          <div key={product._id}>
            <div>
              <span></span>
              <Image
                src={product?.image}
                width={500}
                height={500}
                alt="product image"
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
