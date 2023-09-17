import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-3xl font-semibold hover:text-blue-500 cursor-pointer duration-200 "
    >
      Luxelane.
    </Link>
  );
};

export default Logo;
