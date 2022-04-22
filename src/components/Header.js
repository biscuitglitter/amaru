/* eslint-disable */
import React from "react"

const Header = () => {
  return (
    <div className="flex flex-row justify-between h-16 w-650 bg-white border-0 border-b border-gray-300 py-5 items-center">
      <div className="left-container flex flex-row justify-start">
        <div className="logo-left w-36 text-xl ml-8 font-black">Amaru</div>
      </div>
      <nav className="container md h-5 min-w-42 flex flex-row justify-around text-base font-semibold mr-56 cursor-pointer">
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
    </div>
  )
}

export default Header

