import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Landing';
import Roster from './pages/Roster';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>      
          <Route index element={<Roster />} />    
          <Route path='login' element={<Login />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
