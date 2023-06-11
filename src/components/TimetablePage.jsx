import React from 'react';

const TimetablePage = () => {
  const timetable = [
    { day: 'Monday', classes: [
      { time: '7:30 AM - 9:30 AM', course: 'Software Engineering' },
      { time: '9:30 AM - 11:30 AM', course: 'Computer Systems Design' },
      { time: '1:30 AM - 3:30 AM', course: 'DSA' }
    ]},
    { day: 'Tuesday', classes: [
      { time: '9:30 AM - 11:30 AM', course: 'Linear Circuits' },
      { time: '1:00 PM - 2:30 PM', course: 'History' },
      { time: '3:00 PM - 4:30 PM', course: 'Geography' },
    ]},
    { day: 'Wednesday', classes: [
        { time: '3:30 PM - 5:30 PM', course: 'Computer Systems Design' },
    ]},
    { day: 'Thursday', classes: [
        { time: '11:30 AM - 1:30 PM', course: 'Differential Equations' },
    ]},
    { day: 'Friday', classes: [
        { time: '7:30 AM - 9:30 AM', course: 'Software Engineering' },
        { time: '9:30 AM - 11:30 AM', course: 'Computer Systems Design' },
    ]},
  ];

  const hours = [
    '7:30 AM - 9:30 AM',
    '9:30 AM - 11:30 AM',
    '11:30 AM - 1:30 PM',
    '1:30 AM - 3:30 PM',
    '3:30 PM - 5:30 PM',
  ];

  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center mb-4">Timetable</h1>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Day</th>
                {hours.map((hour) => (
                  <th key={hour}>{hour}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry) => (
                <tr key={entry.day}>
                  <td>{entry.day}</td>
                  {hours.map((hour) => (
                    <td key={hour}>
                      {entry.classes.find((classItem) => classItem.time === hour) && (
                        <ul className="list-unstyled">
                          {entry.classes
                            .filter((classItem) => classItem.time === hour)
                            .map((classItem) => (
                              <li key={classItem.course}>
                                <div className="course">{classItem.course}</div>
                              </li>
                            ))}
                        </ul>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
