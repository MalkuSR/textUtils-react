import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [modetext, setModeText] = useState('Switch Dark')
  const [navstyle, setNavStyle] = useState({
    color: "black"
  })
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Switch Light')
      setNavStyle({
        color: 'white'
      })
      document.body.style.backgroundColor = 'rgb(12 25 36)'
      showAlert(" Dark mode has been enabled", "Success");
      setTimeout(() => {
        setAlert(null)
      }, 2000)
    }
    else {
      setMode('light')
      setModeText('Switch Dark')
      setNavStyle({
        color: 'black'
      })
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode has been enabled", "Success");
      setTimeout(() => {
        setAlert(null)
      }, 2000)
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} modetext={modetext} navstyle={navstyle} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<Textform Heading="Enter the text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
