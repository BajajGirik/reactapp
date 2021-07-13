import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route name="login" exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route name="profile" exact path="/">
            {!user ? (
              <Redirect from="/" to="login" />
            ) : (
              <UpdateProfile />
            )}
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
