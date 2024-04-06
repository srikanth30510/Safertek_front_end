import React, { useState } from 'react';
import './App.css';
import DetailsBlock from './components/DetailsBlock';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import StatisticsBlock from './components/StatisticsBlock';
import Footer from './components/Footer';

const initialState = {
  students: [
    {
      name: 'Srikanth',
      ticketNumber: 12345,
      ticketTopic: 'JavaScript',
      examGrade: 85,
      ratingGrade: 90,
      comments: 'Good job on the JavaScript assignment!',
    },
    {
      name: 'John',
      ticketNumber: 67890,
      ticketTopic: 'HTML',
      examGrade: 95,
      ratingGrade: 80,
      comments: 'Great work on the HTML assignment!',
    },
    {
      name: 'Anil',
      ticketNumber: 11121,
      ticketTopic: 'CSS',
      examGrade: 70,
      ratingGrade: 85,
      comments: 'Keep up the good work on the CSS assignments!',
    },
    {
      name: 'Anil',
      ticketNumber: 11121,
      ticketTopic: 'CSS',
      examGrade: 70,
      ratingGrade: 85,
      comments: 'Keep up the good work on the CSS assignments!',
    },
    {
      name: 'Anil',
      ticketNumber: 11121,
      ticketTopic: 'CSS',
      examGrade: 70,
      ratingGrade: 85,
      comments: 'Keep up the good work on the CSS assignments!',
    },
    {
      name: 'Anil',
      ticketNumber: 11121,
      ticketTopic: 'CSS',
      examGrade: 70,
      ratingGrade: 85,
      comments: 'Keep up the good work on the CSS assignments!',
    },
  ],
  display: {
    showing: 'all',
    filter: '',
    sort: {
      field: 'final grade',
      direction: 'desc',
    },
  },
};

const App = () => {
  const [statistics, setStatistics] = useState({
    totalStudents: 0,
    grades: {},
  });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [state, setState] = useState(initialState);

  const handleSort = (field, direction) => {
    const sortedStudents = [...state.students];

  if (field === 'name') {
    sortedStudents.sort((a, b) =>
      direction === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  } else {
    sortedStudents.sort((a, b) => {
      const aFinalGrade = 0.6 * a.examGrade + 0.4 * a.ratingGrade;
      const bFinalGrade = 0.6 * b.examGrade + 0.4 * b.ratingGrade;

      return direction === 'asc' ? aFinalGrade - bFinalGrade : bFinalGrade - aFinalGrade;
    });
  }

  setState((prevState) => ({
    ...prevState,
    students: sortedStudents,
    display: {
      ...prevState.display,
      sort: { field, direction },
    },
  }));
  };

  const handleFilter = (filter) => {
    const filteredStudents = initialState.students.filter((student) => {
      // Filter logic based on the student's name
      return student.name.toLowerCase().includes(filter.toLowerCase());
    });
  
    setState((prevState) => ({
      ...prevState,
      students: filteredStudents,
      display: {
        ...prevState.display,
        filter: filter,
      },
    }));
  };

  const handleShowDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleShowStatistics = () => {
    const statistics = {
      totalStudents: state.students.length,
      grades: {},
    };
  
    state.students.forEach((student) => {
      const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  
      if (!statistics.grades[finalGrade]) {
        statistics.grades[finalGrade] = 0;
      }
  
      statistics.grades[finalGrade]++;
    });
  
    setState((prevState) => ({
      ...prevState,
      statistics: statistics,
    }));
  };
  const handleCloseStatistics = () => {
    setStatistics(null);
  };

  return (
    <div className="app">
  <Header display={state.display} onShowStatistics={handleShowStatistics} />
  <main className="main-block">
    <MainBlock
      students={state.students}
      display={state.display}
      onSort={handleSort}
      onFilter={handleFilter}
      onShowDetails={handleShowDetails}
    />
  </main>
  <div className="details-block" style={{ display: selectedStudent ? 'block' : 'none' }}>
    <DetailsBlock student={selectedStudent} />
  </div>
  <Footer />
  
</div>
  );
};

export default App;