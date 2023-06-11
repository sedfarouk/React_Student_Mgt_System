import React from 'react';
import softEngPic from '../images/soft_eng.jpeg'
import dsaPic from '../images/dsa.jpg'
import lcPic from '../images/linear_circuits.jpeg'

const CoursePage = () => {
  const courses = [
    {
        id: 1,
        title: 'Software Engineering - CPEN 207',
        instructor: 'Mr. Asiamah',
        imageUrl: softEngPic,
    },
    {
        id: 2,
        title: 'Data Structures & Algorithms - CPEN 204',
        instructor: 'Dr. Margaret Richardson',
        imageUrl: dsaPic,
    },
    {
        id: 2,
        title: 'Linear Circuits - CPEN 206',
        instructor: 'Dr. Mills',
        imageUrl: lcPic
      },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Courses Being Taken</h1>
      <div className="row mt-5">
        {courses.map((course) => (
          <div className="col-md-6 col-lg-4" key={course.id}>
            <div className="card mb-4">
              <img src={course.imageUrl} height="250px" className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <div className="text-center">
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
