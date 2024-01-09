import { useState } from "react";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [modetext, setmodetext] = useState('Set Dark Mode');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      setmodetext('Set Light mode');
      document.body.style.backgroundColor = '#220854';
      showAlert("Dark mode is enabled", "SUCCESS-Dark");
    } else {
      setmode('light');
      setmodetext(<span style={{ color: '#220854' }}>Set Dark Mode</span>);
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "SUCCESS-Light");
    }
  };

  return (
    <>
      <Navbar title="Swaraaj" mode={mode} togglemode={togglemode} modetext={modetext}></Navbar>
      <Alert alert={alert}></Alert>
      <Router>
        <Routes>
          <Route  path="/about" element={<About />} />
          <Route path="/" element={<Textform heading='Textarea' mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
