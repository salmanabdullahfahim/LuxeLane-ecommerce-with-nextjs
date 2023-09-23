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
      <CartItem />
    </Container>
  );
};

export default CartPage;
