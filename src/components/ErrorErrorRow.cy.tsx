import ErrorRow from './Error'

describe('<ErrorRow />', () => {
  it('renders the component with a <p> tag that has the default error message', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ErrorRow />)
    cy.get('p').should('have.text', 'Oh no, there was an error')
  })
})