import React from "react"
import SearchInput from "./SearchInput"

const SuperHeader = () => {
  return (
    <div className="flex bg-gray-800 h-10 w-full text-sm flex-row justify-between cursor-pointer">
      <p className="text-white font-medium ml-8 py-3 hover:underline">Free shipping on domestic orders over $45!</p>
      <div className="right-nav flex flex-row gap-1.5 mr-8 text-white py-3 gap-y-6 w-72">
      <SearchInput />
        <a className="w-8 h-4" href="help">Help</a>
        <a className="h-6 w-6" href="cart">Cart</a>
        </div>
      </div>      
  )
}

export default SuperHeader