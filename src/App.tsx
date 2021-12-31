import React from 'react';
import style from './App.module.css';
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage, ShoppingCart } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useSelector } from './redux/hooks'

const PrivateRoute = ({ component, isAuthenticated, ...rest}) => {
  const routeComponent = (props) => {
    return isAuthenticated ? React.createElement(component, props)
    : <Redirect to={{pathname: '/signIn'}}></Redirect>
  }
  return <Route render={routeComponent} {...rest} />
}

function App() {
  const jwt = useSelector(state => state.user.token)
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signIn" component={SignInPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage}></Route>
          <PrivateRoute component={ShoppingCart} path='/shoppingCart' isAuthenticated={jwt !== null}></PrivateRoute>
          <Route render={() => <h1>404 Not Found</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
