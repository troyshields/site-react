import { useState } from 'react'
import Pad from "../components/Pad.jsx"
import padsData from "../data/pads.js"
import './Pads.css'

export default function Pads(props) {
  
  const [pads, setPads] = useState(padsData)

  function toggle(id) {
    console.log(id)
    
      setPads(prevPads => prevPads.map(item => {
        return item.id === id ? {...item, on: !item.on} : item
    }))
  }

  function handleToggleAllOn() {
    setPads(prevPads => prevPads.map(item => {
      return {...item, on: true}
    }))
  }

  function handleToggleAllOff() {
    setPads(prevPads => prevPads.map(item => {
      return {...item, on: false}
    }))
  }

  const padsButtons = pads.map(pad => {
    return (
      <Pad 
        toggle={toggle} 
        color={pad.color} 
        on={pad.on} 
        id={pad.id} 
        key={pad.id} 
      />
    )
  })

  return (
    <>
      <h1>pads</h1>
      <div className="pad-container">
        {padsButtons}
      </div>

      <div className='pad-buttons'>
        <button onClick={handleToggleAllOff}>Turn all Off</button>
        <button onClick={handleToggleAllOn}>Turn all On</button>
      </div>
    </>
  )
}
