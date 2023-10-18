import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment';
import Home from './Components/Home';


function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
    </div>
  );
}

export default App;
