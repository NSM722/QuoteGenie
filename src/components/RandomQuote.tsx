import React from 'react'
import Row from 'react-bootstrap/esm/Row'

interface RandomQuoteProps {
  quote: {
    content: string;
    author: string;
  };
}

const RandomQuote: React.FC<RandomQuoteProps> = (props) => {
  return (
    <>
      <Row className="justify-content-start text-wrap">
        {/* id-text - On first load, my quote machine displays a random quote in the element */}
        { props.quote?.content}
      </Row>
      <Row className="justify-content-end fw-semibold fst-italic">
        {/* id-author  - On first load, my quote machine displays the random quote's author */}
        -- {props.quote?.author } --
      </Row>     
    </>
  )
}

export default RandomQuote