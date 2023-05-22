import { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux'
import { useFetchRandomQuoteQuery } from './features/quotes/qouteApiSlice';
// import { Dispatch, AnyAction } from 'redux'; // Import Dispatch and AnyAction
// import { RootState } from './app/store';
// import { getQuote } from './features/quotes/qouteSlice';
import { Quote } from './features/quotes/qouteApiSlice';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from './components/NavBar'


import { FaRetweet } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';


const App = () => {
  const { data=[], error, refetch } = useFetchRandomQuoteQuery();
  console.log(data)

  useEffect(() => {
    refetch();
  }, []);

  const handleClick = () => {
    refetch(); // Call dispatch with the refetch action
  };

  const quote: Quote = data[0]

  return (
    <>
      <NavBar />
      <div className="main-wrapper">
        <Container className="wrapper d-flex flex-column justify-content-between lh-sm">
          {
            error ?
            ( 
              <Row>
                <p className="fs-2 fw-bolder">Oh no, there was an error</p>
              </Row> 
            )
            :
              (
                <>
                  <Row className="justify-content-start text-wrap">
                    {/* id-text - On first load, my quote machine displays a random quote in the element */}
                    { quote?.content}


                  </Row>
                  <Row className="justify-content-end fw-semibold fst-italic">
                    {/* id-author  - On first load, my quote machine displays the random quote's author */}
                    -- { quote?.author } --
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
