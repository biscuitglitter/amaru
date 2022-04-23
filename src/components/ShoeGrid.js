import React from "react"
// import Shoe from "./Shoe"
const ShoeGrid = () => {

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8">
      {[
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/joyride.jpg?raw=true", "joyride"], 
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/phantom-flyknit.jpg?raw=trueg", "phantom"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/flyknit.jpg?raw=true", "flyknit"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/tech-challenge.jpg?raw=true", "tech"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/react-infinity.jpg?raw=true", "react infinity"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/pegasus.jpg?raw=true", "pegasus"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/stefan-janoski.jpg?raw=true", "janoski"],
        ["https://github.com/css-for-js/sole-and-ankle/blob/main/public/assets/metcon-5.jpg?raw=true", "metacon"]
      ].map(([url, alt]) => (
        <div key={url.toString()} className="flex flex-column justify-center items-center mx-auto	" style={{ width: "270px", height:"220px" }}>
          <div className="">
            <div style={{ width: "230px", height: "160px" }} className="mb-2.5">
              <img className="border-transparent rounded-t-2xl rounded-b" alt={alt}
                src={url}></img>
            </div>
            <div className="mb-2.5 font-black" style={{ height: "20px" }}>
              <div className="flex flex-column gap-4 justify-between items-center">
                <p style={{ fontSize: "13px" }} className="ml-0">NikeCourt Tech Challenge 2.0</p>
                <p style={{ fontSize: "13px" }} className="line-through font-medium">156$</p>
              </div>
              <div className="flex flex-column gap-4 justify-between items-center">
                <p style={{ fontSize: "13px" }}>Available in 2 colors</p>
                <p style={{ fontSize: "13px" }} className="text-red-600 font-black">122$</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShoeGrid
