"use client";
import { addToCart } from "@/redux/shopSlice";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-4 shadow-xl rounded-lg">
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-7 justify-center">
        <div>
          <p className="text-3xl font-semibold">{product?.title}</p>
          <p className="text-xl font-semibold">$ {product?.price}</p>
        </div>
        <p className="text-lightText">{product?.description}</p>
        <div className="text-sm flex flex-col">
          <span className="text-darkText">Product Code: {product?._id}</span>
          <span className="text-darkText">Category: {product?.category}</span>
        </div>
        <div
          onClick={() =>
            dispatch(addToCart(product)) &&
            toast.success(
              `${product?.title.substring(0, 15)} added successfully`
            )
          }
        >
          <button className="bg-darkText text-slate-100 uppercase text-sm py-3 px-3 flex items-center justify-center gap-x-1 hover:bg-black/70 rounded-sm">
            Add to Cart <IoMdCart />
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
