import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../src/components/header/header';
import Home from '../src/components/home/home';
import Login from '../src/components/login/login';
import ProductDetails from '../src/components/productDetails/productDetails';

function App() {
  return (<Router>
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/productdetails/:id" component={ProductDetails} />
      </Switch>
    </div>
    </Router>);
}

export default App;
