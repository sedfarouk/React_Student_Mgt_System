import React, { useState } from 'react';
import ugLogo from '../images/UGLogo.svg';
import { Link } from 'react-router-dom';

export default function LoginForm () {
  const [email] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return(
    <main>
      <div class="container-sm">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="text-center mb-4">
                  <img src={ugLogo} alt="Logo" class="logo-img" width="200" height="200"/>
                </div>
                <h2 class="card-title mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" value={email}/>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" value={password}/>
                  </div>
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </form>
                <div class="text-center mt-3">
                  <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                  <p><a href="forgot-password.html" onClick={handlePasswordChange}>Forgot your password?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

