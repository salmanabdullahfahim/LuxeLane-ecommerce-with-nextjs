"use client";

import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shopSlice";
import PaymentForm from "@/components/PaymentSection";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);
  const dispatch = useDispatch();

  return (
    <Container>
      {productData.length > 0 ? (
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
            <PaymentForm />
          </div>
        </Container>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-blue-500 w-full p-2 text-center rounded-md">
            Your product cart is empty
          </p>
          <Link href={"/"}>
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-black/75 duration-200">
              Return to Home
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
