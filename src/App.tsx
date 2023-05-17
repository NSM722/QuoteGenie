import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

const BASEURL: string = `https://api.quotable.io/quotes/random`

interface ApiData{
  _id: string;
  content: string;
  author: string;
  tags: [];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

// [{
// 	"_id": "ULj6Dce6aMta",
// 	"content": "The more light you allow within you, the brighter the world you live in will be.",
// 	"author": "Shakti Gawain",
// 	"tags": ["Famous Quotes"],
// 	"authorSlug": "shakti-gawain",
// 	"length": 80,
// 	"dateAdded": "2019-06-27",
// 	"dateModified": "2023-04-14"
// }]

const App = () => {

  const [quoteData, setQuoteData] = useState<ApiData | null>(null)

  useEffect(() => {
    getQuote(BASEURL)
  }, [])
  
  const getQuote = async (url: string) => {
    try {
      const response = await axios.get<ApiData>(url)
      console.log(response.data)
      setQuoteData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <NavBar />
      {/* #quote-box wrapper element should be horizontally centered */}
      <main id="quote-box">
        <p id="id-text">
          {/* On first load, my quote machine displays a random quote in the element */}
          {quoteData?.content}
        </p>
        <p id="author">
          {/* On first load, my quote machine displays the random quote's author */}
          {quoteData?.author}
        </p>
        <button id="new-quote">
          get a new quote
        </button>
        <a 
          id="tweet-quote" 
          href="twitter.com/intent/tweet"
          target="_blank"
        >
          {/* tweet the current tweet */}
        </a>
      </main>
    </>
  )
}

export default App
