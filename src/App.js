import React, { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
/*import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
*/
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <NavBar title="TextUtils" mode={mode} About= "About" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
