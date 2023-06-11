import React from 'react';
import ugPic from '../images/ugcheck.jpg';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <main>
                <section class="hero py-5">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6">
                        <h1 class="display-4">Welcome to UG Student Management System</h1>
                        <p class="lead">Manage your campus student life with ease. Check up assignments, track your academic progress, pay your fees and more with just a few clicks. Tap the button below to get started.</p>
                        <Link to="/dashboard" class="btn btn-primary mb-3">My Dashboard</Link>
                    </div>
                    <div class="col-lg-6">
                        <img src={ugPic} alt="ug" class="img-fluid rounded"/>
                    </div>
                    </div>
                </div>
                </section>

                <section class="features py-5 bg-light mb-5">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4">
                        <Link to="/courses" className='nav-link'><div class="feature text-center">
                        <h3>Courses</h3>
                        <p>Click to check the info about the courses you are taking this semester. </p>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to="/assignments" className='nav-link'><div class="feature text-center">
                        <h3>Assignments</h3>
                        <p>Click to check past and due assignments.</p>
                        </div></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to="/grades" className='nav-link'><div class="feature text-center">
                        <i class="bi bi-graph-up"></i>
                        <h3>Grades and Performance</h3>
                        <p>Click to check your academic performance.</p>
                        </div></Link>
                    </div>
                    </div>
                </div>                
            </section>
        </main>
    </div>
    )
}