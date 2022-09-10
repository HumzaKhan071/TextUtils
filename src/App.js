import NavBar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "red";
      showAlert("Red Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <NavBar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
          toggleModeRed={toggleModeRed}
        />
        <Alert alert={alert} />

        {/* <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={ */}
              <TextForm
                title="Enter Text to Convert"
                mode={mode}
                showAlert={showAlert}
              />
            {/* }
          ></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
