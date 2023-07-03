import React from 'react'
import './NewRelease.css'
import { useEffect,useState } from 'react'
import axios from '../constants/axios'
import {  IMAGE_URL } from '../constants/constants'

function NewRelease(props) {
  const [trending, setTrending] = useState([])
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      setTrending(Response.data.results)
    })
  }, [])
  
  return (
    <div className='NewRelease'>
       <h1 className='NewReleaseTitle'>{props.title}</h1> 
       <div className='NewReleaseCard'>
        {
          trending.map((sys)=>{
            return(
              <img className={props.isSmall ? 'SmallPoster' : 'NewReleaseImg'} src={`${IMAGE_URL+sys.backdrop_path}`} alt="poster" />
            )
          })
        }
       </div>
    </div>
  )
}

export default NewRelease