import React from 'react';

const AssignmentPage = () => {
  const assignments = [
    { id: 1, title: 'CPEN 207 - Assignment 1', dueDate: '2023-06-10', status: 'Submitted' },
    { id: 2, title: 'CPEN 204 - Lab 2', dueDate: '2023-06-15', status: 'Submitted' },
    { id: 3, title: 'CPEN - 206 Assignment 3', dueDate: '2023-06-20', status: 'Not Yet Submitted' },
    { id: 4, title: 'SENG - 203 Assignment 1', dueDate: '2023-06-25', status: 'Not Yet Submitted' },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Past and Due Assignments</h1>
      <div className="card">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {assignments.map((assignment) => (
              <li key={assignment.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>{assignment.title}</h5>
                  <span
                    className={`badge ${assignment.status === 'Submitted' ? 'bg-success' : 'bg-danger'}`}
                  >
                    {assignment.status}
                  </span>
                </div>
                <p>
                  <strong>Due Date:</strong> {formatDate(assignment.dueDate)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
