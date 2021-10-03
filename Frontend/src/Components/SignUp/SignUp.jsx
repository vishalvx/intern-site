import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { LoginForm, Wrapper } from './SignUp.style';

export const SignUp = ({ isLogin: Logged }) => {
  const history = useHistory();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // get login form
      const form = e.target;
      // const formName = form.getElementsByTagName('h1')[0].innerText;

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

      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8 ' },
      });
      console.log(res);
      history.push('/login');
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
          <form onSubmit={handleRegister}>
            <h1>Sign Up</h1>

            <label htmlFor="name">First Name:</label>
            <input type="text" name="firstname" id="fname" required />
            <label htmlFor="name">Last Name:</label>
            <input type="text" name="lastname" id="lname" required />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
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
