/* eslint-disable */
import React from "react"

const Header = () => {
  return (
    <header className="flex flex-row justify-between align-center h-16 w-650 bg-white border-0 border-b border-gray-300 py-5 items-center">
      <div className="left-container flex flex-row justify-start">
        <div className="logo w-36 text-3xl ml-16 mr-2 font-black">Amaru</div>
      </div>
      <nav style={{width: "700px", minWidth: "700px"}} className="container md h-5 min-w-38 flex flex-row justify-around text-base font-black mr-72 cursor-pointer text-sm leading-5">
        {[
          ["SALE", "/sale"],
          ["NEW RELEASES", "/releases"],
          ["MEN", "/men"],
          ["WOMEN", "/women"],
          ["KIDS", "/kids"],
          ["COLLECTIONS", "/collections"]
        ].map(([title, url]) => (
          <a key={title.toString()} href={url} className="hover:text-blue-600">{title}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header

