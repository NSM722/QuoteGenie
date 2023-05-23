// **react
import React from 'react'

// **react-bootstrap
import Row from 'react-bootstrap/Row';

const ErrorRow: React.FC = () => {
  return (
    <Row>
      <p className="fs-2 fw-bolder">Oh no, there was an error</p>
    </Row> 
  )
}

export default ErrorRow