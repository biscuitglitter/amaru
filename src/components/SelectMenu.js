import React from "react"

const SelectMenu = () => {
  return (
    <label className="text-gray-700 text-xs" htmlFor="choices">
    <select style={{width: "190px"}} className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none font-extrabold cursor-pointer">
        <option value="newestReleases">
            Newest releases
        </option>
        <option value="onSale">
            On sale
        </option>
        <option value="goodDeals">
            Good deals
        </option>
    </select>
</label>
  )
}
export default SelectMenu

