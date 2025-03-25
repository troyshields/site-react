export default function Die(props) {

  const isHeld = props.isHeld ? "isheld" : null

  return (
      <button 
        onClick={props.hold} 
        className={isHeld}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
  )
}