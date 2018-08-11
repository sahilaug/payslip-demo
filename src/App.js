import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { history } from "./utils/history";
import { configureStore } from "./store/configure-store";
import { Home, Results } from "./pages";

const store = configureStore();

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export { App };
