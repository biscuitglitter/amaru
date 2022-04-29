import React, { useState, useEffect } from "react"

import { db } from "../firebase-config"
import { onSnapshot, doc } from "firebase/firestore"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"

const ShoeGrid = () => {

  const [shoes, setShoes] = useState([])
  const [justReleased, setJustReleased] = useState([])
  const [sale, setSale] = useState([])

  const docRef = doc(db, "shoesdetails", "yYMa3pvIT2QEtseSY8vi")

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setShoes(doc.data())
    })
    /* eslint-disable */ 
  }, [])
  
  const filterTags = (shoe) => {
    if (justReleased.includes(shoe) || sale.includes(shoe)) return 
    shoe.tag === "justreleased" ? setJustReleased([...justReleased, shoe]) : setSale([...sale, shoe])
  }

  useEffect(() => {
    shoes.shoelist !== undefined ?
      shoes.shoelist.map((shoe) => {
      shoe.tag ? filterTags(shoe) : ""
      }) : ""
  })

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-10 gap-y-10">
      {/* {justReleased !== undefined ? justReleased.map((shoe) => {
        return <Shoe key={uuidv4()} shoe={shoe} />
      }) : ""} */}
    </div>
  )
}

export default ShoeGrid
