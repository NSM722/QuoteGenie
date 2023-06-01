import RandomQuote from './RandomQuote'

describe('<RandomQuote />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RandomQuote quote={{
      content: '',
      author: ''
    }} />)
  })
})