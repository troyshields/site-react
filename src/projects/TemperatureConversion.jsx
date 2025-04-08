import { useState } from "react"
import '../styles/TemperatureConversion.css'

export default function TemperatureConversion() {
  const [fahrenheit, setFahrenheit] = useState(0)
  const [celsius, setCelsius] = useState(0)

  function handleF(event) {
    const fahrenheitValue = parseFloat(event.target.value)
    setFahrenheit(fahrenheitValue)
    const newCelsius = Math.round((fahrenheitValue - 32) * (5 / 9))
    setCelsius(newCelsius)
  }

  function handleC(event) {
    const celsiusValue = parseFloat(event.target.value)
    setCelsius(celsiusValue)
    const newFahrenheit = Math.round((celsiusValue * 9 / 5) + 32)
    setFahrenheit(newFahrenheit)
  }

  return (
    <>
      <h1>Temperature Conversion</h1>
      <div className="container-degrees">
        <div className="degree">
          Fahrenheit
          <p>
            <input
              id="fahrenheit"
              type="number"
              size={3}
              value={fahrenheit}
              onChange={handleF}
            />{" "}
            F
          </p>
        </div>
        <div className="degree">
          Celsius
          <p>
            <input
              id="celsius"
              type="number"
              size={3}
              value={celsius}
              onChange={handleC}
            />{" "}
            C
          </p>
        </div>
      </div>
    </>
  );
}