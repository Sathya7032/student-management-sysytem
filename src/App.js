import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListStudents from "./component/ListStudents";
import Header1 from "./component/Header1";
import Home1 from "./component/Home1";
import AddStudent from './component/AddStudent'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />}></Route>
          <Route path="/students" element={<ListStudents />}></Route>
          <Route path="/add" element={<AddStudent />}></Route>
          <Route path="/add/:id" element={<AddStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
