import React, { useContext } from "react"
import { ViewContext } from "./context/ViewContext"

const SearchInput = () => {
    const { searchTerm, setSearchTerm, setUpdatedValue } = useContext(ViewContext)

    const handleChange = (e) => {
        setSearchTerm(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUpdatedValue(searchTerm)
    }

    return (
        <div className="h-6">
            <form>
                <input type="text" className=" font-bold text-sm border-0 border-b bg-gray-800 text-white placeholder-gray-400 outline-none" onChange={handleChange} placeholder="Search..." />
                <button onClick={handleSubmit} className="text-sm">Search</button>
            </form>
        </div>

    )
}

export default SearchInput

