import Navbar from './Navbar';
import Home from "./Home";
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Create from './Create';
import ScrollArrow from './ScrollArrow';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';

import Clock from './clock';
function App() {
  const [user, setLoginUser]= useState({})
  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      <Clock/>
    
      <ScrollArrow/>
      <div className="content">
      <Switch>
         <Route exact path="/" >
            {
            user && user._id ? <Home setLoginUser={setLoginUser} />:<Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route  path="/login" ><Login setLoginUser={setLoginUser} /> </Route>
          <Route  path="/signup" ><Signup /> </Route>
        
        <Route exact path="/create" >
            {
            user && user._id ? <Create setLoginUser={setLoginUser} />:<Login setLoginUser={setLoginUser} />
            }
          </Route>
        <Route exact path="/blogs/:id" ><BlogDetails/> </Route>
        <Route exact path="*" ><NotFound/> </Route>     
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
