import React from "react"

const Tag = ({shoe}) => {
  const tag = shoe.tag
  return (
    tag === "justreleased" ? <div className="rounded-sm px-2 py-1 bg-pink-700"><p>Just released</p></div> : <div className="bg-orange-500 rounded-sm px-2 py-1"><p>Sale</p></div>
  )
}
export default Tag

