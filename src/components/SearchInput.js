import React, { useEffect, useContext } from "react"
import { ViewContext } from "./context/ViewContext"

const SearchInput = () => {
    const { searchTerm, setSearchTerm, setUpdatedValue, updatedValue } = useContext(ViewContext)

    const handleChange = (e) => {
        setSearchTerm(e.currentTarget.value)
    }

    const handleSubmit = () => {
        setUpdatedValue(searchTerm)
    }
 
    useEffect(() => {
    }, [updatedValue])

    return (
        <div className="h-6">
            <form>
                <input type="text" className=" font-bold text-sm border-0 border-b bg-gray-800 text-white placeholder-gray-400 outline-none" onChange={handleChange} placeholder="Search..." />
                <button className="text-sm" onSubmit={handleSubmit}>Search</button>
            </form>
        </div>

    )
}

export default SearchInput

