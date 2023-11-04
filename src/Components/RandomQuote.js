import React, { useState,useEffect } from 'react'
import "./RandomQuote.css"
import logo from "./logo192.png"
const RandomQuote = () => {
    const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
    

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }
    useEffect(() => {
        getQuote()
      }, []);

    const handleClick=()=>{
        getQuote()
    }
    

    
  return (

    <div className='container'>
<div className='quote'>{quote}</div>
<div>
<div className='line'></div>
<div className='bottom'>
    <div className='author'>{author}</div>
    <div className='icons'>
        <img src={logo} onClick={(text)=>{handleClick(text)} } alt="" />
        <img src={logo} alt="" />
    </div>
</div>

</div>


    </div>
  )
}

export default RandomQuote