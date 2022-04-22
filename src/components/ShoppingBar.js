import React from "react"
import SelectMenu from "./SelectMenu"

const ShoppingBar = () => {
  return (
    <div className="flex flex-row justify-between align-center" style={{width: "920px", height: "50px"}}>
      <div className="left">
      <div className="text-xl text-grey-900 leading-6 font-black">Running</div>         
      </div>
      <div className="right flex flex-row justify-between align-center gap-1.5" style={{width: "250px"}}>
        <button className="font-extrabold pb-3.5 text-sm" style={{width: "40px"}}>Sort</button>
        <SelectMenu />
      </div>
    </div>
  )
}

export default ShoppingBar