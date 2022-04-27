import React from "react"
import { v4 as uuidv4 } from "uuid"

const Shoe = ({shoe}) => {
  return (
    <div key={uuidv4()} className="flex flex-column justify-center items-center">
    <div className="">
      <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
      <img src={shoe.url} className="border-transparent rounded-t-2xl rounded-b"></img>
      </div>
      <div style={{ height: "20px" }}>
        <div className="flex flex-column gap-2 font-black justify-between items-center">
        <p style={{ fontSize: "13px", fontWeight: "800" }} className="ml-0 text-pink-600">{shoe.name}</p>
        <p style={{ fontSize: "13px" }} className="line-through"> {shoe.price}$ </p>
        </div>
        <div className="flex flex-column gap-2 font-black justify-between items-center">
        <p style={{ fontSize: "13px" }}> {shoe.colors} colors</p>
        <p style={{ fontSize: "13px" }}> {shoe.newPrice}$ </p>        
      </div>
      </div>
    </div>
  </div> 
  )
}

export default Shoe

