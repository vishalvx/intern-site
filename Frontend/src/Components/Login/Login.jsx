import React from 'react';
import { Redirect, useHistory } from 'react-router';
import PropTypes from 'prop-types';
//components
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { LoginForm, Wrapper } from './Login.style';

export const Login = ({ setIsLogin, setUser, isLogin: Logged, user }) => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // get login form
      const form = e.target;
      const formName = form.getElementsByTagName('h1')[0].innerText;

      //get value from login form
      const values = Object.values(form).reduce((object, field) => {
        if (field.name) {
          console.log(field.name);
          if (field.name == 'role') {
            object[field.name] = document.getElementsByName('role')[0].checked
              ? 'student'
              : 'company';
          } else {
            object[field.name] = field.value;
          }
        }
        return object;
      }, {});
      console.log(values);

      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8 ' },
      });

      const details = await res.json();

      console.log(details);

      if (details.isLogin) {
        setIsLogin(details.isLogin);
        setUser({
          email: details.userData.email.address,
          name: details.userData.firstname,
        });
        history.push('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (Logged) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <Header />
      <Wrapper>
        <LoginForm>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <div className="role">
              <div className="studentRole">
                <input
                  type="radio"
                  name="role"
                  id="roleStudent"
                  value="student"
                />
                <label htmlFor="roleStudent">Student</label>
              </div>
              <div className="Company">
                <input
                  type="radio"
                  name="role"
                  id="roleCompany"
                  value="company"
                />
                <label htmlFor="roleCompany">Company</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </LoginForm>
      </Wrapper>
      <Footer />
    </>
  );
};
Login.propTypes = {
  isLogin: PropTypes.bool,
  user: PropTypes.object,
  setIsLogin: PropTypes.func,
  setUser: PropTypes.func,
};
