import React, {useEffect, useState} from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';

const EditCreator = () => {
  const [name, setName] = useState("")
  const [displayName,setDisplayName] = useState("")
  const [description, setDescription] = useState("")
  const [socialMediaURL, setSocialMediaURL] = useState("")
  const [error, setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [creatorId,setCreatorId] = useState()
  const {id} = useParams()
  const [image,setImage] = useState("")
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    const fetchCreator = async() => {
        setLoading(true)
        const {data,error} = await supabase.from('creators').select("*").eq('id',id)

        setName(data[0]?.name)
        setDisplayName(data[0]?.name)
        setDescription(data[0]?.description)
        setSocialMediaURL(data[0]?.url)
        setCreatorId(data[0]?.id)
        setLoading(false)
        console.log(data)
        
    }
    fetchCreator()
  },[])
  
  const editCreator = async(e) => {
    e.preventDefault()
    setLoading(true)
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

    
      const {data,error} = await supabase.from('creators').update({name,description,url:socialMediaURL,imageURL}).eq('id',creatorId)
      if (!error){
        setSuccess(true)
      } else {
        setError(false)
      }
      setLoading(false)
  }

  return (
    <div style={{textAlign:'center'}} className='container-fluid'>
      {loading ? <progress></progress> : ( 
    
        <> 
        
      <h1>Change {displayName && displayName}</h1>
      {success && <h2 style={{color:'green'}}>Succesfully edited!</h2>}
      {error && <h2 style={{color:'red'}}>An error occured.</h2>}
      <article>
        <form onSubmit={editCreator}>
          {error && <p style={{color:'red'}}>Please fill in all fields.</p>}
          <label>Change name of creator:
          <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </label>
        <label>Change description of creator:
          <textarea
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </label>
        <label>Change url of social media:
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
        <input type="submit" value="Change Creator!"/>
        </form>
      </article>
      </>
      )}
    </div>
  )
}

export default EditCreator