import React from "react"
import { v4 as uuidv4 } from "uuid"

const Shoe = ({url}) => {
  return (
    <div key={uuidv4()} className="flex flex-column justify-center items-center">
    <div className="">
      <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
      <img src={url} className="border-transparent rounded-t-2xl rounded-b"></img>
      </div>
      <div style={{ height: "20px" }}>
        <div className="flex flex-column gap-4 font-black justify-around items-center">
        <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
        <p style={{ fontSize: "13px" }}> 156$ </p>
        </div>
        <div className="flex flex-column gap-4 font-black justify-start items-center">
        <p style={{ fontSize: "13px" }}> Available in 2 colors</p>
      </div>
      </div>
    </div>
  </div> 
  )
}

export default Shoe

// <div key={uuidv4()} className="flex flex-column justify-center items-center">
// <div className="">
//   <div style={{ width: "230px", height: "160px" }} className="mb-3.5">
//       <img className="border-transparent rounded-t-2xl rounded-b" url={url} />
//   </div>
//   <div style={{ height: "20px" }}>
//     <div className="flex flex-column gap-4 font-black justify-around items-center">
//     <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
//     <p style={{ fontSize: "13px" }}> 156$ </p>
//     </div>
//     <div className="flex flex-column gap-4 font-black justify-start items-center">
//     <p style={{ fontSize: "13px" }}> Available in 2 colors</p>
//   </div>
//   </div>
// </div>
// </div> 