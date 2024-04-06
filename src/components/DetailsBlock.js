import React from 'react';
const DetailsBlock = ({ student }) => {
    if (!student) {
        return <div>No student selected</div>;
      }
    
      return (
        <div className="details">
          <h3>Details for {student.name}</h3>
          <p>Ticket Number: {student.ticketNumber}</p>
          <p>Ticket Topic: {student.ticketTopic}</p>
          <p>Exam Grade: {student.examGrade}</p>
          <p>Rating Grade: {student.ratingGrade}</p>
          <p>Comments: {student.comments}</p>
        </div>
      );
  };
  export default DetailsBlock;