import React from 'react';
import './App.css';
// import Hello from './projects/Hello';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Hello name="Sanish" enthusisam={5} /> */}
      {/* <Hello /> */}
      <ProjectsPage />
    </div>
  );
};

export default App;
