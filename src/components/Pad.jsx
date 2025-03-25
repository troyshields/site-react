import React, { useState } from "react"

export default function Pad(props) {

  const styles = {
    backgroundColor: props.color
  }


  let [isOn, setIsOn] = useState(props.on)

  function toggleOn() {
    
    setIsOn(prevIsOn => !prevIsOn)
    // setIsOn (!isOn)
    // console.log("toggle")
  }

  // const hasClass = props.on ? "on" : "off"
  // looking at the local state of on
  const hasClass = props.on ? "on" : "off" 

  return (
    <button 
      style={styles} 
      className={hasClass} 
      onClick={() => props.toggle(props.id)}
    >{props.color}</button>
  )
}