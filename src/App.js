import { BrowserRouter, Route, Routes } from "react-router-dom";
import Get from "./Get";
import Edit from "./Edit";
import Detail from "./Detail";
import Create from "./Create";

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">HALLO CRUD</h1>
      <BrowserRouter>
        <Routes>
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
