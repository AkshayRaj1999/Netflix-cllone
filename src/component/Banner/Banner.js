import React from 'react'
import './Banner.css'
import { useEffect,useState } from 'react'
import axios from '../constants/axios'
import { API_KEY, BASE_URL, IMAGE_URL } from '../constants/constants'

function Banner() {

  const [movie, setMovie] = useState('')
  useEffect(() => {
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`).then((Response)=>{
      setMovie(Response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  }, [])
  
  return (
    <div className='banner'
      style={{backgroundImage:`url(${IMAGE_URL+movie.backdrop_path})`}}>
        <div className='banner-content'>
        <h1 className='banner-title'>{movie ? movie.original_title : ""}</h1>
        <div className='banner-btns-div'>
            <button className='banner-btn'>Play</button>
            <button className='banner-btn'>My List</button>
        </div>
        
        <p className='banner-description'>{movie ? movie.overview : ""}</p>
        </div>
        <div className="banner-fade"></div>
    </div>
  )
}

export default Banner