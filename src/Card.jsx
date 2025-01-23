import { AiOutlineShopping } from "react-icons/ai";
import React from 'react';

function Card({ title, img, alt, star, company, newPrice, prevPrice, reviews }) {
  return (
    <div className="w-fit mt-3 flex items-center flex-col relative shrink-0 ml-4 sm:w-3/12 h-[300px] border-2 rounded-lg border-black">
      <div className="w-[150px] h-[100px] m-3 mr-6 relative">
        <img src={img} alt={alt} className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col ml-3 font-medium absolute bottom-9">
        <h1>{title}</h1>
        <div className="flex flex-row items-center gap-1">
          {star}
          {reviews}
        </div>
        <div className="font-light text-1xl flex flex-row items-center gap-1">
          <div className="line-through">{newPrice}</div>
          {prevPrice}
        </div>
      </div>
      <div className="w-full bottom-2 flex justify-end absolute items-end">
        <AiOutlineShopping size={30} />
      </div>
    </div>
  );
}

export default Card;