import React from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'



function List() {
  const location = useLocation();
  // console.log(location)
  const [destination , setDestination] = useState(location.state.destination)
  const [openDate , setOpenDate] = useState(false)
  const [date , setDate] = useState(location.state.date)

  const [options , setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // const { data , loading , error , reFetch} = useFetch(`http://localhost:8000/api/hotels?city=${destination} &min=${min || 0 }&max=${max || 999}`)
  const { data , loading , error , reFetch} = useFetch(`http://localhost:8000/api/hotels?city=${destination} `)


  const handleClick=()=>{
    reFetch();
  }


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className='LsTitle'>Search</h1>
            <div className="LsItem">
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className="LsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/mm/yyyy")} to
               ${format(date[0].endDate, "dd/mm/yyyy")} to`}</span>
                {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
                )}
            </div>
            <div className="LsItem">
              <label>Options</label>
              <div className="LsOptions">
                <div className="LsOptionItem">
                  <span className="LsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="LsOptionInput" />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="LsOptionInput" />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="LsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="LsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="LsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
          </div>
          <button onClick={handleClick}>Search</button>
          </div>

          <div className="ListResult">

          {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
