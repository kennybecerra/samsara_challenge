import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './routes/pages/main';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
