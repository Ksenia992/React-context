import * as React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages";
import Profile from "./pages/Profile"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
