import React, { useState } from 'react';
import ugLogo from '../images/UGLogo.svg';

const RegistrationForm = () => {
  const [name] = useState('');
  const [email] = useState('');
  const [password] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div class="text-center mb-4">
                  <img src={ugLogo} alt="Logo" class="logo-img" width="200" height="200"/>
              </div>
              <h2 className="card-title text-center">Student Registration</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
