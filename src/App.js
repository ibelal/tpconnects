import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard/" component={Dashboard} exact />
        <Route path="/search/" component={Search} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
