import { AiOutlineShopping } from "react-icons/ai";
import { PiEyedropperSample } from "react-icons/pi";

export default function Card(props){

    return(
        <>
        <div className="w-fit mt-3 flex items-center flex-col relative shrink-0  ml-4 sm:w-3/12 h-[300px] border-2 rounded-lg border-black">
        <div className="w-[150px] h-[100px] m-3  mr-6 relative">
        <img src={props.img} className="w-full h-full rounded-lg"></img>
        </div>
        <div className="flex flex-col ml-3  font-medium  absolute bottom-9">
         <h1>{props.title}</h1>
        <div className="flex flex-row items-center gap-1"> {props.star}
            {props.reviews}
        </div>
         <div className="font-light text-1xl flex flex-row items-center gap-1">
         <div className="line-through">{props.newPrice}</div>{props.prevPrice}</div>
        </div>
        <div className="w-full bottom-2  flex justify-end absolute items-end "> <AiOutlineShopping size={30}></AiOutlineShopping></div>
        </div>
        </>
    )
};