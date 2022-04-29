import React, { useState, useEffect, useContext } from "react"

const SelectMenu = () => {
  const [clicked, setClicked] = useState([])

  const handleClick = () => {
    console.log("on select")
  }

  return (
    <label className="text-gray-700 text-xs mr-3" htmlFor="choices">
    <select onClick={handleClick} style={{width: "190px", fontSize: "14.2px", lineHeight: "18.78px"}} className="block py-2 px-3 border-none rounded-md shadow-sm focus:outline-none font-black cursor-pointer mb-3 bg-gray-100">
    {[
    ["all", "All"],
    ["newestreleases", "Newest releases"],    
    ["sale", "On sale"],
  ].map(([value, text]) => (
      <option key={value.toString()} value={value} className="py-2 px-3 font-black border-none">{text}</option>
  ))}
    </select>
</label>
  )
}
export default SelectMenu

