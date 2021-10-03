import React from 'react';
//hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
//GlobalStyles
import { GlobalStyles } from './GlobalStyles';
//Component
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import { NotFound } from './Components/NotFound/NotFound';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';
import { Profile } from './Components/Profile';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    console.log('app', isLogin);
    console.log('user', user);
  }, [isLogin]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home
              isLogin={isLogin}
              user={user}
              setIsLogin={setIsLogin}
              setUser={setUser}
            />
          </Route>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login">
            <Login
              setIsLogin={setIsLogin}
              setUser={setUser}
              isLogin={isLogin}
              user={user}
            />
          </Route>
          <Route path="/signup">
            <SignUp isLogin={isLogin} />
          </Route>
          <Route path="/profile">
            <Profile
              isLogin={isLogin}
              user={user}
              setIsLogin={setIsLogin}
              setUser={setUser}
            />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        <GlobalStyles />
      </Router>
    </>
  );
};

export default App;
