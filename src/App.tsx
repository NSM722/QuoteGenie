// **hooks 
import { useEffect } from 'react';
import { useFetchRandomQuoteQuery } from './features/quotes/qouteApiSlice';
import { Quote } from './features/quotes/qouteApiSlice';

// **components
import NavBar from './components/NavBar'
import ErrorRow from './components/Error';
import Tweet from './components/Tweet';

// **react bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// **styles 
import 'bootstrap/dist/css/bootstrap.min.css';


// **react icons
import { TbHandClick } from 'react-icons/tb';
import RandomQuote from './components/RandomQuote';


const App = () => {
  const { data=[], error, refetch } = useFetchRandomQuoteQuery();

  // useEffect runs once when the component mounts, it calls refetch() to fetch the initial random quote from the API 
  useEffect(() => {
    refetch(); // refetch() ignores cache and fetches the API data/Makes the API call
  }, []);

  // onClick handler that calls refetch() to fetch a new random quote from the API
  const handleClick = () => {
    refetch(); // refetch() ignores cache and fetches a new quote
  };

  const quote: Quote = data[0]

  return (
    <>
      <NavBar />
      <main className="main-wrapper">
        <Container className="wrapper d-flex flex-column justify-content-between lh-sm">
          {
            error ?
            <ErrorRow /> 
            :
            <>
              <RandomQuote quote={quote}/>
              <Button className="text-uppercase fw-bold" variant="outline-dark" onClick={handleClick}>
                new quote <TbHandClick />
              </Button>
              <Tweet />
            </>
            
          }
        </Container>
      </main>
    </>
  )
}

export default App
