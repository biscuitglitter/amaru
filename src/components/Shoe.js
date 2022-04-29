import React from "react"
import { v4 as uuidv4 } from "uuid"
import AddToCart from "./AddToCart"
import Tag from "./Tag"

const sectionStyle = "flex flex-column gap-2 font-black justify-between items-center"

const Shoe = ({ shoe }) => {
  return (
    <div key={uuidv4()} className="flex flex-column justify-center items-center leading-5 mx-2.5">
      <div className="cursor-pointer">
        <div style={{ width: "210px", height: "170px" }} className="mb-3.5 group">
          <div className="group flex row justify-center">
            <AddToCart />
            <div className="flex row justify-end absolute z-50 text-white font-black mt-0.5" style={{width: "200px", height: "30px", fontSize: "13px"}}>{ shoe.tag === undefined ? "" : <Tag shoe={shoe} /> }</div>
          </div>
          <img alt={shoe.name} src={shoe.url} className="border-transparent rounded-t-2xl rounded-b"></img>
        </div>
        <div style={{ height: "20px", fontSize: "13px", lineHeight: "20px" }}>
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

