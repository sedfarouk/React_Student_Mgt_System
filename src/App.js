import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm';
import RegistrationPage from './components/RegistrationForm'
import DashboardPage from './components/Dashboard';
import StudentInfoPage from './components/StudentInfoForm';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ForgotPasswordPage from './components/ForgotPasswordPage';

function App (){
  return (
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="login" Component={LoginPage}/>
      <Route path="register" Component={RegistrationPage}/>
      <Route path="/dashboard" Component={DashboardPage}/>
      <Route path="/profile" Component={StudentInfoPage}/>
      <Route path="/about" Component={AboutPage}/>
      <Route path="/login/resetpassword" Component={ForgotPasswordPage}/>
    </Routes>
  );
};

export default App;
