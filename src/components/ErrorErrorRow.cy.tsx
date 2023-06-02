import ErrorRow from './Error'

describe('<ErrorRow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ErrorRow />)
  })
})