import React from "react"

const MainHeader = () => {
  return (
    <header className="flex flex-row justify-between h-16 bg-white border-0 border-b border-gray-300 py-5 items-center" style={{width: "100%"}}>
      <div className="flex-1">
        <div className="logo w-36 text-3xl ml-16 mr-2 font-black pb-1">Amaru</div>
      </div>
      <nav style={{width: "700px", minWidth: "600px"}} className="h-5 min-w-38 flex flex-row justify-around text-base cursor-pointer text-sm leading-5 gap-3 mx-12">
        {[
          ["NEW RELEASES", "/releases"],
          ["MEN", "/men"],
          ["WOMEN", "/women"],
          ["KIDS", "/kids"],
          ["COLLECTIONS", "/collections"]
        ].map(([title, url]) => (
          <a key={title.toString()} href={url} style={{fontWeight: "900"}} className="hover:text-blue-600">{title}</a>
        ))}
      </nav>
      <div className="flex-1">
      </div>
    </header>
  )
}

export default MainHeader

