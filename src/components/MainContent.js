import React from "react"
import Sidebar from "./Sidebar"
import ShoppingBar from "./ShoppingBar"

const MainContent = () => {
  return (
    <div className="px-8 pt-12 flex flex-row" style={{ height: "876px", width: "1120px" }}>
      <div className="left">
        <Sidebar />
      </div>
      <div className="right flex flex-row">
        <ShoppingBar />
      </div>
    </div>
  )
}

export default MainContent