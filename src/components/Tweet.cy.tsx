import Tweet from './Tweet'

describe('<Tweet />', () => {
  it('renders clickable element with the text "tweet"', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tweet />);
    cy.get('a[href="twitter.com/intent/tweet"]').should('exist').click();
    cy.get('a').should('have.text', 'tweet ');
  })
})