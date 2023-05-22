import { useEffect } from 'react';
import { useFetchRandomQuoteQuery } from './features/quotes/qouteApiSlice';
import { Quote } from './features/quotes/qouteApiSlice';


// styles 
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

  useEffect(() => {
    refetch(); // refetch() ignores cache and makes fetches the API data/Makes the API call
  }, []);

  const handleClick = () => {
    refetch(); // refetch() ignores cache and makes fetches the API data/Makes the API call
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
