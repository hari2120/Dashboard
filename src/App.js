import React from 'react'
import "./app.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:index" component={EditUser}/>
          <Route exact path="/users/:index" component={User}/>
          <Route component={NotFound}/>
        </Switch>


      </Router>
      
    </div>
  );
}

export default App;
