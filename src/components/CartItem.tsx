import React from "react";
import { useSelector } from "react-redux";
import { stateProps } from "../../type";

const CartItem = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);
  return (
    <div>
      <div className="flex items-center justify-between bg-neutral-100 shadow-md p-2 font-semibold">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex items-center justify-center">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>
    </div>
  );
};

export default CartItem;
