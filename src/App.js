import { BrowserRouter, Route, Routes } from "react-router-dom";
import Get from "./components/Get";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import Create from "./components/Create";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  return (
    <div className="container m-auto h-screen">
      <h1 className="font-bold text-7xl text-center">HALLO CRUD</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/data" element={<Get />} />
          <Route path="/data/create" element={<Create />} />
          <Route path="/data/detail/:id" element={<Detail />} />
          <Route path="/data/edit/:id" element={<Edit />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
