import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from './components/NavBar'


import { FaRetweet } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';


const BASEURL: string = `https://api.quotable.io/quotes/random`

interface ApiData {
  _id: string;
  content: string;
  author: string;
  tags: string [];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

const App = () => {

  const [quoteData, setQuoteData] = useState<ApiData[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getQuote(BASEURL)
  }, [])
  
  const getQuote = async (url: string) => {
    try {
      const response = await axios.get<ApiData[]>(url)
      // console.log(response.data)
      setQuoteData(response.data)
    } catch (error) {
      setError('Failed to fetch the quote, please try again...')
    }
  }

  const handleClick = () => {
    getQuote(BASEURL)
  }

  return (
    <>
      <NavBar />
      <div className="main-wrapper">
        <Container className="wrapper d-flex flex-column justify-content-between lh-sm">
          {
            error ?
            ( 
              <Row>
                <p className="fs-2 fw-bolder">{error}</p>
              </Row> 
            )
            :
              (
                <>
                  <Row className="justify-content-start text-wrap">
                    {/* id-text - On first load, my quote machine displays a random quote in the element */}
                    {quoteData.length > 0 && quoteData[0]?.content }
                  </Row>
                  <Row className="justify-content-end fw-semibold fst-italic">
                    {/* id-author  - On first load, my quote machine displays the random quote's author */}
                    -- {quoteData.length > 0 && quoteData[0]?.author} --
                  </Row>
                  <Button 
                    // id-new-quote
                    className="text-uppercase fw-bold"
                    variant="outline-dark"
                    onClick={handleClick}
                  >
                    new quote <TbHandClick />
                  </Button>
                  <a 
                    // id tweet-quote
                    className="btn btn-outline-primary text-uppercase fw-bold" 
                    href="twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* tweet the current tweet */}
                    tweet <FaRetweet />
                  </a>
                </>
              )
          }
        </Container>
      </div>
    </>
  )
}

export default App
