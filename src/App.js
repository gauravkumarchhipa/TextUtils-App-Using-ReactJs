import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
// let name = "Gaurav";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      setInterval(()=>{
        document.title = 'TextUtils is Amazing Site';
      },2000);

      setInterval(()=>{
        document.title = 'Open now Text Utils Website';
      },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>

  <Router>
    <Navbar title="TextUtils2" abouttext="About_Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
      
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
        </Route>
      </Switch>
    
    
    </div>
    </Router>

  </>

  );
}

export default App;
