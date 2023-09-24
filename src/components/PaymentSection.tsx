"use client";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { Products, stateProps } from "../../type";

const PaymentForm = () => {
  const { productData, userInfo } = useSelector(
    (state: stateProps) => state.shop
  );
  const dispatch = useDispatch();
  const [netAmount, setNetAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    productData.map((product: Products) => {
      amount += product.price * product.quantity;
      return;
    });
    setNetAmount(amount);
  }, [productData]);

  const { data: session } = useSession();

  return (
    <div className="w-full bg-white p-4">
      <h2>Cart Totals</h2>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Subtotal</p>
          <p>${netAmount}</p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Shipping</p>
          <p>{netAmount > 0 && "$ 20"}</p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase font-medium">Total Price</p>
          <p>{netAmount > 0 && netAmount + 20}</p>
        </div>
      </div>
      {userInfo ? (
        <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/80 cursor-pointer duration-200">
          Proceed to checkout
        </button>
      ) : (
        <div>
          <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/80 cursor-not-allowed duration-200">
            Proceed to checkout
          </button>
          <p className="text-base mt-1 text-red-500 font-semibold animate-bounce">
            Please login to payment
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
