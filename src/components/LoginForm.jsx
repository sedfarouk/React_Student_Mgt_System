import React, { useState } from 'react';
import ugLogo from '../images/UGLogo.svg';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_LOGIN_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMessage('An error occurred during login. Please try again later.');
    }
  };

  return (
    <main>
      <div className="container-sm">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <img src={ugLogo} alt="Logo" className="logo-img" width="200" height="200" />
                </div>
                <h2 className="card-title mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                <div className="text-center mt-3">
                  <p>
                    Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
                  <p>
                    <Link to="/login/resetpassword" onClick={handlePasswordChange}>
                      Forgot your password?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
