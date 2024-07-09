import {useState } from 'react'
import axios from 'axios'

// import React from 'react'

function Cloudinary() {
    const [imageInput, setImageInput] = useState()
    const cloudname = 'difce7p4s';
    const preset = 'bravery_travels' ;

    const handleUpload = async () => {
        const payload = new FormData();
        payload.append("file", imageInput)
        payload.append("upload_preset", preset)
        try{
        console.log(imageInput)
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, payload)
        const secure_url = response.data.secure_url
        const imageUrl = secure_url.replace("/upload","/upload/w_300/f_auto/")
        console.log(imageUrl)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <input type="file" name='image' id='image' onChange={(e) => {setImageInput(e.target.files[0])}}/>
        <button onClick={handleUpload}> Upload Photo </button>
    </div>
  )
}

export default Cloudinary