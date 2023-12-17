import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

function Featured() {
  const { data , loading , error} = useFetch("http://localhost:8000/api/hotels/countByCity?cities=patna,bhopal,siwan")
  // console.log(data)

  return (
    <div className='featured'>
     { loading ? (
      "Loading please wait"
     ) :
      <>  <div className="featuredItem">
        <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Patna</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Bhopal</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Siwan</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
      
      
    </div>
  )
}

export default Featured
