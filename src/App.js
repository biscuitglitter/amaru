import React, { useEffect, useState } from "react"
import SuperHeader from "./components/SuperHeader"
import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"
import { ViewContext } from "./components/context/ViewContext"

const App = () => {
  const [selected, setSelected] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [updatedValue, setUpdatedValue] = useState("")

  return (
    <div>
      <ViewContext.Provider value={{ selected, searchTerm, setSearchTerm, setUpdatedValue, setSelected }}>
        <SuperHeader />
        <MainHeader />
        <MainContent />
      </ViewContext.Provider>

    </div>
  )
}

export default App