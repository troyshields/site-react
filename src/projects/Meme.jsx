
import React, { useState, useEffect } from 'react'
import '../styles/Meme.css'

export default function Meme()  {

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])
  const [randomImage, setRandomImage] = useState(null);

  useEffect (() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))

    console.log('useEfect render')

  }, [])

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleRandomImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: newMemeUrl
    }))
  }
 
  return (
    <>
      <h1>Meme Generator</h1>
      
      <div className='meme-generator'>
        
        <div className="form">
          <label>Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </label>

          <label>Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
          <button onClick={handleRandomImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
        
          <img src={meme.imageUrl} />
          <span className="top">{meme.topText}</span>
          <span className="bottom">{meme.bottomText}</span>
        </div>
      </div>
    </>
  )
}