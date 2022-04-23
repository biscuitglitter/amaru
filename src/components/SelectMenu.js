import React from "react"

const SelectMenu = () => {
  return (
    <label className="text-gray-700 text-xs" htmlFor="choices">
    <select style={{width: "190px", fontSize: "16px", lineHeight: "18.78px"}} className="block py-2 px-3 border-none rounded-md shadow-sm focus:outline-none font-black cursor-pointer mb-3 bg-gray-100">
    {[
    ["newestReleases", "Newest releases"],
    ["onSale", "On sale"],
    ["goodDeals", "Good deals"],
  ].map(([value, text]) => (
      <option key={value.toString()} value={value} className="py-2 px-3 font-black border-none">{text}</option>
  ))}
    </select>
</label>
  )
}
export default SelectMenu

