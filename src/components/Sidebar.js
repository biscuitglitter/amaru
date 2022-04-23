import React from "react"

const Sidebar = () => {
  return (
    <div className="flex flex-column justify-start cursor-pointer font-black" style={{ width: "250px", height: "420px", fontSize: "14px" }}>
      <ul>
      {[
          ["Lifestyle", "/lifestyle"],
          ["Running", "/running"],
          ["Training", "/training"],
          ["Gym", "/gym"],
          ["Athletics", "/athletics"],
          ["Walking", "/walking"],
          ["Basketball", "/basketball"],
          ["Skateboarding", "/skateboarding"],
          ["Golf", "/golf"],
          ["Football", "/football"],
        ].map(([title, url]) => (
          <li key={title.toString()} className="py-0.5 hover:text-pink-500" href={url}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

