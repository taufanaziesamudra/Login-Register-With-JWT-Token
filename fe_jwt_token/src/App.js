import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Dashboard from "./01.Membuat Nav Log Reg Dash/components/Dashboard";
// import Login from "./01.Membuat Nav Log Reg Dash/components/Login";
// import Register from "./01.Membuat Nav Log Reg Dash/components/Register";

// import Dashboard from "./02. Membuat Function Register & Login/components/Dashboard";
// import Login from "./02. Membuat Function Register & Login/components/Login";
// import Register from "./02. Membuat Function Register & Login/components/Register";

import Dashboard from "./03. Membuat Function Dashboard/components/Dashboard";
import Login from "./03. Membuat Function Dashboard/components/Login";
import Register from "./03. Membuat Function Dashboard/components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
