import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Registerpage from './RegistrationPage/register.js';
import Loginpage from './LoginPage/login.js';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registerpage />}/>  
          <Route path="/Login" element={<Loginpage />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
