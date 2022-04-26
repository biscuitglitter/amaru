import React, { useState, useEffect } from "react"
import { db } from "../firebase-config"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"
import { collection, getDocs } from "firebase/firestore"

const ShoeGrid = () => {

  const shoesCollec = collection(db, "shoesdetails")
  const [shoesArray, setShoesArray] = useState([])

  useEffect(() => {
    const getArrays = async () => {
      const data = await getDocs(shoesCollec)
      setShoesArray(data.docs.map((doc) => ({ ...doc.data() })))
      console.log(shoesArray)
    }
    getArrays()
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8">
    </div>
  )
}

export default ShoeGrid
