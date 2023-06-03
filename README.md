# QuoteGenie

A [Random Quotes](https://github.com/lukePeavey/quotable "Random Quotes API") Generator App

```js
// example url
`https://api.quotable.io/quotes/random`;
```

Check out the [QuoteGenie live site demo](https://quote-genie-machine.netlify.app "view site")

When the page loads, the quote machine displays a random quote along with the author

When the `NEW QUOTE` button is clicked, the quote machine will fetch a new quote and author

One can retweet a quote via the `TWEET` button

## Styling

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/ "read docs")

[React Icons](https://react-icons.github.io/react-icons/ "read docs")

[React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction "read docs")

## Recommended Patterns

[Redux Ducks Pattern](https://redux.js.org/style-guide "read style guide docs")

## Testing

A Quick start testing guide with [Cypress for React App](https://docs.cypress.io/guides/component-testing/react/quickstart "read docs")

Follow [this link for writing tests in Typescript](https://docs.cypress.io/guides/tooling/typescript-support "read docs")

```js
// example of the App.tsx file is being mounted
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe("<App />", () => {
  it("renders component and clicking on the new quote button fetches a new quote", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
```

### API Testing

```js
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe("<App />", () => {
  it("renders component and tests the api GET request along with data length of 1", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    cy.request({
      method: "GET",
      url: "https://api.quotable.io/quotes/random",
    }).then((response) => {
      expect(response.body).have.lengthOf(1);
    });
  });
});
```
