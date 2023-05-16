import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'



function App() {
  return (
    <>
      <NavBar />
      {/* #quote-box wrapper element should be horizontally centered */}
      <main id="quote-box">
        <p id="id-text">
          {/* On first load, my quote machine displays a random quote in the element */}
        </p>
        <p id="author">
          {/* On first load, my quote machine displays the random quote's author */}
        </p>
        <button id="new-quote">
          {/* fetch new quote on click */}
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
