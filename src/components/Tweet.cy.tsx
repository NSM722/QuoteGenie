import React from 'react'
import Tweet from './Tweet'

describe('<Tweet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tweet />)
  })
})