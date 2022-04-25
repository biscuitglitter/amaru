import React from "react"
import SearchInput from "./SearchInput"

const SuperHeader = () => {
  return (
    <div className="flex bg-gray-800 h-10 text-sm flex-row justify-between cursor-pointer" style={{width: "100%"}}>
      <p style={{fontSize: "0.75rem", fontWeight: "500"}} className="hidden sm:block text-white ml-8 py-3 hover:underline mr-4">Free shipping on domestic orders over $45!</p>
      <div className="right-nav flex flex-row gap-5 mr-8 text-white py-3 w-72">
      <SearchInput />
        <a className="w-8 h-4" href="help">Help</a>
        <a className="h-6 w-6" href="cart">Cart</a>
        </div>
      </div>      
  )
}

export default SuperHeader