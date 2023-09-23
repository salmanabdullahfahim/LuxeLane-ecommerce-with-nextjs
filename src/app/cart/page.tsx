"use client";

import Container from "@/components/Container";
import { useSelector } from "react-redux";
import { stateProps } from "../../../type";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);

  return (
    <Container>
      <h2 className="text-2xl mb-2 font-semibold">Cart</h2>
      <div className="flex flex-col gap-y-6">
        <CartItem />

        <div className="flex justify-end items-center">
          <button className="bg-blue-500 text-slate-100 py-2 px-6 hover:bg-blue-600 hover:text-white duration-200 font-semibold rounded-md">
            Reset Cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
