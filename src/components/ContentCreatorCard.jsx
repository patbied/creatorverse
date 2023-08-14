import React from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
const ContentCreatorCard = ({creator,fetch,viewSingle}) => {

    const deleteCreator = async() => {
        const {data,error} = await supabase.from('creators').delete().eq('id',creator.id)
        console.log(data)
        fetch()
    }
  return (
    <article>
    {!viewSingle && creator.name && <h1>{creator.name}</h1>}
    {creator.imageURL && <img style={{borderRadius:'30%',height: '100px',width:'100px'}} src={`https://rqelvcsuhvltahitjrkh.supabase.co/storage/v1/object/public/creatorimages/${creator.imageURL}`} alt={`${creator?.name} image`}/>}
    <p>Description: {creator.description}</p>
    <p><a target='_blank' href={creator.url}>Social Media Page</a></p>    
    {!viewSingle &&<Link to={`/view-creator/${creator.id}`}><button>View creator</button></Link>}
    <Link to={`/edit-creator/${creator.id}`}><button>Edit creator</button></Link>
    <button onClick={deleteCreator}>Delete creator</button>
    </article>
  )
}

export default ContentCreatorCard