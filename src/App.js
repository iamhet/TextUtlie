import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alertmsg from "./components/Alertmsg";
// import About from "./components/About";
// import {
//   BrowserRouter,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
   
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
     showAlert(null);
    }, 2000);
   
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert(" Dark mode has been enabled","success");
   
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","success");
    }
  }
  return (  
      
      <>
     
      {/* <BrowserRouter> */}
      <Navbar title="react  JS" mode={mode}  togglemode={togglemode}/>
      <Alertmsg alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter Your Text Here :" mode={mode} showAlert={showAlert}/>
          {/* <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          </Route> */}
      </div>

     

      {/* </BrowserRouter>    */}
      </>
    
  );
}

export default App;
