// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React, { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=() =>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#093154';
      showAlert('Dark Mode has been enabled', 'success');
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light Mode has been enabled', 'success');
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtil" mode={mode} toggleMode ={toggleMode} aboutText="About Us"/>
    <Alert alert=  {alert}/>
      <div className='container my-3'>
    <Routes>
        <Route path='about' element={<About/>}/>
        <Route path='/' element={<TextForm showAlert={showAlert} mode={mode}/>}/>
      </Routes>
          {/* <About/> */}
      </div>
      
      </BrowserRouter>
  </>
  
  );
}

export default App;
