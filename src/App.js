import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

  );
}

export default App;
