import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

describe('<App />', () => {
  it('renders component and tests the api GET request along with data length of 1', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    cy.request({
      method: 'GET',
      url: 'https://api.quotable.io/quotes/random',
    }).then(response => {
      expect(response.body).have.lengthOf(1)
    })
  })
})
