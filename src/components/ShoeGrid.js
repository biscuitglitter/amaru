import React, { useState, useEffect } from "react"
import { db } from "../firebase-config"
import { onSnapshot, doc } from "firebase/firestore"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"

const ShoeGrid = () => {
  const [shoes, setShoes] = useState([])
  const docRef = doc(db, "shoesdetails", "yYMa3pvIT2QEtseSY8vi")

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setShoes(doc.data())
    })
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-20 gap-y-10 md:gap-x-12">
      {shoes.shoelist !== undefined ? shoes.shoelist.map((shoe) => {
        return <Shoe key={uuidv4()} shoe={shoe} />
      }) : ""}
    </div>
  )
}

export default ShoeGrid
