import React from 'react';
const StatisticsBlock = ({ statistics }) => {
    if (!statistics) {
      return <div>No statistics available!...Click on show statistics to get data</div>;
    }
    return (
      <div className="statistics-block">
        <h3>Statistics</h3>
        <p>Total Students: {statistics.totalStudents}</p>
        {Object.entries(statistics.grade).map(([grade, count]) => (
          <p key={grade}>
            Grade {grade}: {count}
          </p>
          
        ))}
        <p>Total Failed:2</p>
        <p>Total Passed:4</p>
        <p>Refresh page to get new data</p>
      </div>
    );
  };
  export default StatisticsBlock;