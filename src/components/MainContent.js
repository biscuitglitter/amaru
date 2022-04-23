import React from "react"
import Sidebar from "./Sidebar"
import ShoppingBar from "./ShoppingBar"
import ShoeGrid from "./ShoeGrid"

const MainContent = () => {
  return (
    <div className="flex flex-row">
      <div className="px-8 pt-12 flex flex-row" >
        <Sidebar />
      </div>
      <div className="flex flex-column" style={{height: "900px"}}>
        <div className="px-8 pt-12">
          <ShoppingBar />
          <div className="pt-12">
            <ShoeGrid />
            </div>
        </div>
      </div>      
    </div>
  )
}

export default MainContent 