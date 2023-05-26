// **react
import React from 'react'

// **react-icons
import { FaRetweet } from 'react-icons/fa';

const Tweet: React.FC = () => {
  return (
    <a 
      className="btn btn-outline-primary text-uppercase fw-bold" 
      href="twitter.com/intent/tweet"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* tweet the current tweet */}
      tweet <FaRetweet />
    </a>
  )
}

export default Tweet