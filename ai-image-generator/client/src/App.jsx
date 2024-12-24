import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Login from "./components/Login";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Temp from "./components/Temp";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-screen min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temp" element={<Temp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
