import React from 'react';
import FormBuilder from './components/FormBuilder/FormBuilder';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dynamic Form Builder Challenge</h1>
        <p>Build a form generator that fetches schema from API and handles validation</p>
      </header>
      <main className="app-main">
        <FormBuilder />
      </main>
    </div>
  );
};

export default App;