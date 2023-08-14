import React, {useState} from 'react'
import { supabase } from '../client'
const AddCreator = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [socialMediaURL, setSocialMediaURL] = useState("")
  const [error, setError] = useState(false)
  const [image,setImage] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading,setLoading] = useState(false)
  const addCreator = async(e) => {
    e.preventDefault()
    //Save image to bucket
    let imageURL = ""
    if (image){
      const {data,error} = await supabase.storage.from("creatorimages").upload(`${Date.now()}_${image.name}`,image)
      
      if (data){
        console.log(data)
        imageURL  = data.path
      }
      if (error){
        console.log(error)
      }
    }
    //Add user to database
    if (name && description && socialMediaURL){
      const {data} = await supabase.from('creators').insert({name,description,url:socialMediaURL,imageURL})
    }else{
      setError(true)
    }
  }
  return (
    <div style={{textAlign:'center'}} className='container-fluid'>
      <h1>Add a creator</h1>
      <article>
        <form onSubmit={addCreator}>
          {error && <p style={{color:'red'}}>Please fill in all fields.</p>}
          <label>Enter name of creator:
          <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </label>
        <label>Enter description of creator:
          <textarea
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </label>
        <label>Enter url of social media:
          <input
          type="text" 
          value={socialMediaURL}
          onChange={(e) => setSocialMediaURL(e.target.value)}
          required
        />
        </label>
        <label>Add image for creator (optional)
          <input
          type="file"
          accept={"image/jpeg image/png"}
          onChange={(e) => setImage(e.target.files[0])}
          
        />
        </label>
        <input type="submit" value="Add Creator!"/>
        </form>
      </article>
    </div>
  )
}

export default AddCreator