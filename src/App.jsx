import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { Routes, Route} from "react-router-dom";
import ReductCard from "./components/ReductCard/ReductCard";
import Authorization from './components/AuthorizationModal/Authorization';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reduct" element={<ReductCard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
