import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import posed, { PoseGroup } from "react-pose";

import 'styles/app.scss';

import store from 'state/main-reducer';

import Home from 'routes/home';
import NotFound from "components/not-found";
import ReduxExample from "components/redux-example";

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { ease: "linear", duration: 350 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: { ease: "linear", duration: 350 }
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <header className='Header'>
                  <Link className='' to='/'>Home</Link>
                  <Link className='u-pL-lg' to='/redux-example'>Redux Example</Link>
                </header>

                <main className='Content u-m-lg'>
                  <Switch>
                    <Route exact={true} path='/' component={Home} />
                    <Route exact={true} path='/redux-example' component={ReduxExample} />
                    <Route component={NotFound} />
                  </Switch>
                </main>

                <footer className='Footer'>
                  <p>This is the footer</p>
                </footer>
              </RouteContainer>
            </PoseGroup>
          )} />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
