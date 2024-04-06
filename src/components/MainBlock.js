import React from 'react';

const MainBlock = ({ students, display, onSort, onFilter, onShowDetails }) => {
  return (
    <div className="main-block1">
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort('name', 'asc')}>Name</th>
            <th onClick={() => onSort('ticketNumber', 'asc')}>Ticket Number</th>
            <th onClick={() => onSort('ticketTopic', 'asc')}>Ticket Topic</th>
            <th onClick={() => onSort('examGrade', 'desc')}>Exam Grade</th>
            <th onClick={() => onSort('ratingGrade', 'desc')}>Rating Grade</th>
            <th>Comments</th>
            <th onClick={() => onShowDetails(null)}>Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.ticketNumber}>
              <td>{student.name}</td>
              <td>{student.ticketNumber}</td>
              <td>{student.ticketTopic}</td>
              <td>{student.examGrade}</td>
              <td>{student.ratingGrade}</td>
              <td>{student.comments}</td>
              <td>
                <button onClick={() => onShowDetails(student)}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MainBlock;