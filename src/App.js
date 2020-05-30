import React from 'react';
import { Router,Route } from "react-router";
import { createBrowserHistory } from "history";
import Listing from './listing';
import ImageDetail from './imageDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
        
          <Route path="/" exact component={Listing} />
          <Route path="/imageDetail/:id" component={ImageDetail}/>
    </Router>
  );
}

export default App;
