import { productData } from "@/constants/data";

export const getData = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");

  if (!res.ok) {
    throw new Error("Could not find the product data");
  }
  return res.json();
};

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const getSingleProduct = (_id: number) => {
  const product = productData.find((item) => item._id === _id);
  return product;
};

export const getTrendingData = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );

  if (!res.ok) {
    throw new Error("Could not find the product data");
  }
  return res.json();
};
