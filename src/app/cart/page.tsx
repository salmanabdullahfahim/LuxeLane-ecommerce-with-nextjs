"use client";

import Container from "@/components/Container";
import { useSelector } from "react-redux";
import { stateProps } from "../../../type";

const CartPage = () => {
  const { productData } = useSelector((state: stateProps) => state?.shop);

  return (
    <Container>
      <h2>Cart</h2>
    </Container>
  );
};

export default CartPage;
