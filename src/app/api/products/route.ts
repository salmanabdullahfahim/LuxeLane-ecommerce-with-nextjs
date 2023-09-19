import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Product data get successfully",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product is not available",
      },
      {
        status: 500,
      }
    );
  }
};
