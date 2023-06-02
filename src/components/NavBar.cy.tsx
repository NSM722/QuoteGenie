import NavBar from './NavBar'

/**
 * The `describe` function takes two parameters, 
 * the first of which is the name of the test suite
 * and the second is a function that will execute the tests
 */

/**
 * The first parameter to `it` is a brief description of the spec
 * and the second parameter is a function that contains the test code
 */
describe('<NavBar />', () => {
  it('renders the component with the brand text "QuoteGenie"', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />);
    cy.contains('QuoteGenie').should('exist')
  })
})