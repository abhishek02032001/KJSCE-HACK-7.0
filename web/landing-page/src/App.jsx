import { Footer, Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
