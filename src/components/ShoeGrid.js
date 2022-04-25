import React, { useState, useEffect } from "react"
import { storage } from "../firebase-config"
import { listAll, ref, getDownloadURL } from "firebase/storage"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"

const ShoeGrid = () => {
  const imagesListRef = ref(storage, "shoes/")
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url])
        })
      })
    })
  }, [])


  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-8">
      {imageUrls.map((url) => {
          return <Shoe key={uuidv4()} url={url}/>
        }
)}
    </div>
  )
}

export default ShoeGrid