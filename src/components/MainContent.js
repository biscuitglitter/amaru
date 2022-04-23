import React from "react"
import Sidebar from "./Sidebar"
import ShoppingBar from "./ShoppingBar"
import ShoeGrid from "./ShoeGrid"

const MainContent = () => {
  return (
    <div className="flex flex-row">
      <div className="px-8 pt-36 pr-0	flex flex-row" >
        <Sidebar />
      </div>
      <div className="flex flex-column" style={{height: "900px"}}>
        <div className="px-4 pt-12">
          <ShoppingBar />
          <div className="px-0 pt-12" style={{minWidth: "1000px"}}>
            <ShoeGrid />
            </div>
        </div>
      </div>      
    </div>
  )
}

export default MainContent 