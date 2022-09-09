import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie,setMovie] =useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const arr = response.data.results
            const random = Math.floor(Math.random() * arr.length)
            // console.log(response.data.results[random])
            setMovie(response.data.results[random])
        })
    },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}}

    className='Banner' > 
        <div className='content'>
            <h1 className='moviename'>{movie ? movie.title : ""}</h1>
            <div className='bannerbuttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className='fade_bottom'></div>

      
    </div>
  )
}

export default Banner
