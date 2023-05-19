import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BASEURL: string = `https://api.quotable.io/quotes/random`

interface ApiData {
  _id: string;
  content: string;
  author: string;
  tags: [];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

const App = () => {

  const [quoteData, setQuoteData] = useState<ApiData[]>([])

  useEffect(() => {
    getQuote(BASEURL)
  }, [BASEURL])
  
  const getQuote = async (url: string) => {
    try {
      const response = await axios.get<ApiData[]>(url)
      console.log(response.data)
      setQuoteData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = () => {
    getQuote(BASEURL)
  }

  return (
    <>
      <NavBar />
      <Container className="wrapper">
          <Row id="id-text">
            {/* On first load, my quote machine displays a random quote in the element */}
            {quoteData.length > 0 && quoteData[0]?.content}
          </Row>
          <Row id="author">
            {/* On first load, my quote machine displays the random quote's author */}
            {quoteData.length > 0 && quoteData[0]?.author}
          </Row>
          <Button 
            id="new-quote"
            variant="outline-dark"
            size="sm"
            onClick={handleClick}
          >
            new quote
          </Button>
          <a 
            id="tweet-quote" 
            href="twitter.com/intent/tweet"
            target="_blank"
          >
            {/* tweet the current tweet */}
          </a>
      </Container>
    </>
  )
}

export default App
