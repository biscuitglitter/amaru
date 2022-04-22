import React from "react"
import SearchInput from "./SearchInput"

const SuperHeader = () => {
  return (
    <div className="flex bg-gray-800 max-h-10 w-full text-sm">
      <p className="text-white font-medium">Free shipping on domestic orders over $45!</p>
      <div className="rightNav">
      <SearchInput />
        <a className="w-8 h-4 text-white">Help</a>
        </div>
      </div>      
  )
}

export default SuperHeader