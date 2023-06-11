import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Profile Picture</h5>
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="img-fluid mb-3" />
              ) : (
                <div className="text-center">
                  <p>No profile picture</p>
                </div>
              )}
              <input type="file" className="form-control" onChange={handleProfilePictureChange} accept="image/*" />
            </div>
        </div>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Navigation</h5>
              <ul className="list-group">
                <li className="list-group-item">Courses</li>
                <li className="list-group-item">Grades</li>
                <li className="list-group-item">Calendar</li>
                <li className="list-group-item">Messages</li>
                <li className="list-group-item"><Link to="/profile" className='nav-link'>Profile</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Welcome, Farouk Sedick</h5>
              <p className="card-text">Below are the statistics and progress report of your academic studies.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Upcoming Assignments</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Assignment 1</li>
                    <li className="list-group-item">Assignment 2</li>
                    <li className="list-group-item">Assignment 3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Notifications</h5>
                  <ul className="list-group">
                    <li className="list-group-item">New announcement</li>
                    <li className="list-group-item">Reminder: Assignment due</li>
                    <li className="list-group-item">Course registration opens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Course Progress</h5>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: '80%' }}></div>
              </div>
              <p className="card-text mt-2">You have completed 80% of the course.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
