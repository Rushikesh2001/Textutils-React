import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#412f72";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  // setInterval(() => {
  //   document.title = "Textutils";
  // }, 2000);

  // setInterval(() => {
  //   document.title = "Install Textutils app now";
  // }, 1500);

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route
          path="/"
          element={
            <div className="container">
              <TextForm
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
