import React from 'react';
import style from './App.module.css';
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signIn" component={SignInPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage}></Route>
          <Route render={() => <h1>404 Not Found</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
