"use client";

import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shopSlice";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2 className="text-2xl mb-2 font-semibold">Cart</h2>
      <div className="flex flex-col gap-y-6">
        <CartItem />

        <div className="flex justify-end items-center">
          <button
            onClick={() => dispatch(resetCart())}
            className="bg-blue-500 text-slate-100 py-2 px-6 hover:bg-blue-600 hover:text-white duration-200 font-semibold rounded-md"
          >
            Reset Cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
