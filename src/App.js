import * as React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages";
import Profile from "./pages/Profile"
import PermissionDenied from "./pages/PermissionDenied";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/error" element={<PermissionDenied />} />
        </Routes>
    </div>
  );
}

export default App;
