import React from "react"
import Sidebar from "./Sidebar"
import ShoppingBar from "./ShoppingBar"
import ShoeGrid from "./ShoeGrid"

const MainContent = () => {
  return (
    <div className="flex flex-row">
      <div className="px-12 pt-16 pr-0	flex flex-row" >
        <Sidebar />
      </div>
      <div className="flex flex-column" style={{height: "800px"}}>
        <div className="px-20 pt-12">
          <ShoppingBar />
          <div className="px-0 pt-12" style={{minWidth: "800px"}}>
          <ShoeGrid />
            </div>
        </div>
      </div>      
    </div>
  )
}

export default MainContent 

