import React, { useState, useEffect } from "react"
import { db } from "../firebase-config"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"
import { onSnapshot, doc } from "firebase/firestore"

const ShoeGrid = () => {
  const [shoes, setShoes] = useState([])
  const docRef = doc(db, "shoesdetails", "JYEKETVDiu4hV0WbmJ1m")

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setShoes(doc.data())
    })
  })

  useEffect(() => {
    console.log(shoes)
    for (const obj in shoes) {
      console.log(Object.keys(obj))
    }
    
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8">
      {/* {imageUrls.slice(0, 12).map((url) => {
          return <Shoe key={uuidv4()} url={url} />
        } */}
    </div>
  )
}

export default ShoeGrid
