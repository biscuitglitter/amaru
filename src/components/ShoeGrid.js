import React from "react"

const ShoeGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-x-9 gap-y-28 border-gray-600">
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>
      <div style={{width: "200px", height: "200px"}} className="border-4 border-slate-800">Card</div>   
    </div>
  )
}

export default ShoeGrid
