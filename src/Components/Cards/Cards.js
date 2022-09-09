import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./Card.css"
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'

function Cards(props)  {
    const [movies,setMovies]  = useState([]) 
    const [urlId,setUrlId]  = useState('') 
    useEffect(()=>{
        axios.get(props.urls).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            // alert(err)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovies=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Triler not available')
            }
        })
      }
    return (
        <div className='cards'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {movies&&movies.map((obj)=>
            <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? "smallPoster" :"poster" } src={`${imageUrl+obj.backdrop_path}`} alt="poster" key={obj.id} />
                )}
            
             </div>
             { urlId && <YouTube opts={opts} videoId={urlId.key}  />}          
        </div>
    )
}

export default Cards
