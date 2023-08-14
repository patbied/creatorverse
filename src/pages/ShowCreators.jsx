import React, { useEffect, useState } from 'react'
import { supabase } from '../client'

import ContentCreatorCard from '../components/ContentCreatorCard'
const ShowCreators = () => {
    const [creators,setCreators] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchCreators = async() => {
        setLoading(true)
        const {data} = await supabase.from('creators').select("*")
        if (data && data.length >=1){

            setCreators(data)
            console.log(data)
        } else {
            setCreators()
        }
        if (error){
            setError(True)
        }
        
        setLoading(false)
    }
   
    useEffect(() => {
        
        fetchCreators()
    },[])
  return (
    <div className='container-fluid'>
        <h1 style={{textAlign:'center'}}>View all creators</h1>
        {loading && <progress></progress>}
        {!creators && !loading && <p style={{textAlign: 'center'}}>No creators.</p>}
        {error && <p>An error occured while fetching creators.</p>}
        {creators && ( 
        <div>
            {creators.map((creator) => (
               <ContentCreatorCard viewSingle={false} key={creator.id} creator={creator} fetch={fetchCreators}/>
            ))}
        </div>)}
      
    </div>
  )
}

export default ShowCreators