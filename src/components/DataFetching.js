import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    // const [posts,setPosts] = useState([])
    const [post,setPost] = useState({})
    const [id,setId] =useState(1)
    const [idFromButtonClik, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }


    useEffect(()=>{
     axios
     .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClik}`)
     .then(res=>{
         setPost(res.data)
     })
     .catch(error=>{
         console.log(error)
     })    
    },[idFromButtonClik])


  return (
    <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Post</button>
        {
            <h3>{post.title}</h3>
        }
        {/* <ul>
            {
                posts.map(post=><li key={post.id}> {post.value}</li>)
            }
        </ul> */}

    </div>
  )
}

export default DataFetching