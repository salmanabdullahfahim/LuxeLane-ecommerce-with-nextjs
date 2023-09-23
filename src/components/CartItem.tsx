import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, stateProps } from "../../type";
import Image from "next/image";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { decreaseQuantity, increaseQuantity } from "@/redux/shopSlice";

const CartItem = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-between bg-neutral-100 shadow-md p-2 font-semibold">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex items-center justify-center">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>

      <div className="flex flex-col gap-y-2 mt-2">
        {productData?.map((product: Products) => (
          <div
            key={product._id}
            className="flex flex-col md:flex-row w-full justify-between items-center gap-4 bg-neutral-100 p-2 rounded-md"
          >
            <div className="flex items-center gap-x-3 w-full md:w-1/3">
              <span className="text-lg hover:text-red-500 cursor-pointer duration-300">
                <AiOutlineClose />
              </span>
              <Image
                src={product?.image}
                width={500}
                height={500}
                alt="product image"
                className="w-20 h-20 object-cover"
              />
            </div>
            <div className="flex items-center justify-start w-full md:w-auto gap-x-3 px-3 py-2  bg-neutral-200 rounded-sm">
              <p>Quantity</p>
              <div className="flex items-center justify-between text-lg w-20">
                <span
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className="cursor-pointer duration-200"
                >
                  <AiOutlineMinus />
                </span>
                <span className="font-semibold">{product?.quantity}</span>
                <span
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="cursor-pointer duration-200"
                >
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div className="flex ">
              <p>Price</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
