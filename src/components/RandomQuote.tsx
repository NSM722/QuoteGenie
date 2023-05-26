// **react
import React from 'react'
// import Tweet from './Tweet.tsx'
// import  handleClick from '../App'

// **react-bootstrap
// import Row from 'react-bootstrap/esm/Row'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// **react-icons
// import { TbHandClick } from 'react-icons/tb'

// **define the props interface
interface RandomQuoteProps {
  quote: {
    content: string;
    author: string;
  };
}

const RandomQuote: React.FC<RandomQuoteProps> = (props) => {
  return (
    <>
      <Card border='dark' className='mb-2'>
        <Card.Header as='h3' className='text-uppercase fw-bolder'>Quote of the day</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {/* id-text - On first load, my quote machine displays a random quote in the element */}
              { props.quote?.content}
            </p>
            <footer className="blockquote-footer">
              {/* id-author  - On first load, my quote machine displays the random quote's author */}
              {props.quote?.author } -- <cite title="Source Title">Random Quotes</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  )
}

export default RandomQuote
