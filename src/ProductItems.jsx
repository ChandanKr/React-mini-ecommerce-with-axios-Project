import React from "react";

export default function ProductItems({ product }) {
  return (
    <div className="shadow-lg text-center pb-4 border border-black">
      <img src={product.thumbnail} alt="productImage" className="w-full h-[220px] mx-auto border-b border-black" />
      <h5 className="px-2 md:px-4 py-2 text-lg">{product.title}</h5>
      <b>₹{product.price * 80}</b>
    </div>
  );
}
