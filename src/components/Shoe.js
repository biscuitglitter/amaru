import React from "react"
import { v4 as uuidv4 } from "uuid"

const sectionStyle = "flex flex-column gap-2 font-black justify-between items-center"

const Shoe = ({shoe}) => {
  return (
    <div key={uuidv4()} className="flex flex-column justify-center items-center leading-5 mx-2.5">
    <div className="">
      <div style={{ width: "270px", height: "170px" }} className="mb-3.5">
      <img src={shoe.url} className="border-transparent rounded-t-2xl rounded-b"></img>
      </div>
      <div style={{ height: "20px", fontSize: "14px", lineHeight: "20px"}}>
        <div className={sectionStyle}>
        <p style={{ fontWeight: "900" }} className="ml-0 text-gray-900">{shoe.name}</p>
            <p className={shoe.newPrice !== null ? "line-through" : ""}> {shoe.price}$ </p>
        </div>
        <div className={sectionStyle}>
        <p className="text-slate-500"> {shoe.colors < 2 ? `${shoe.colors} color` : `${shoe.colors} colors`} </p>
        <p className="text-pink-600"> {shoe.newPrice ? `${shoe.newPrice}$` : ""} </p>        
      </div>
      </div>
    </div>
  </div> 
  )
}

export default Shoe

