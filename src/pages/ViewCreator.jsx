import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';
import ContentCreatorCard from '../components/ContentCreatorCard';
const ViewCreator = () => {
  const [creator,setCreator] = useState()
  const {id} = useParams()
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const fetchCreator = async() => {
        setLoading(true)
        const {data,error} = await supabase.from('creators').select("*").eq('id',id)
        setCreator(data[0])
        setLoading(false)
        console.log(data)
    }
    fetchCreator()
  },[])

  return (
    <div className='container-fluid'>
      {loading ? <progress></progress> : ( 
        <> 
       <h1 style={{textAlign:'center'}}>Viewing {creator?.name}</h1>
      {creator && <ContentCreatorCard viewSingle={true} creator={creator}/>}
      </>
      )}
    </div>
  )
}

export default ViewCreator