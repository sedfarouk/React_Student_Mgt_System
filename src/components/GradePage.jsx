import React from 'react';

const GradePage = () => {
  const grades = [
    { id: 1, course: 'Database System Design - CPEN 202', grade: 'A' },
    { id: 2, course: 'Digital Circuits - CPEN 206', grade: 'A' },
    { id: 3, course: 'C++ Programming - CPEN 203', grade: 'A' },
  ];

  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center mb-4">Grades and Performance</h1>
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.id}>
                  <td>{grade.course}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GradePage;
