import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Save from './pages/Save';

function App() {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path= "/" component = {Home} />
          <Route exact path= "/save" component = {Save} />
           
       </Switch>

      </div>
    </Router>
  );
};


export default App;
