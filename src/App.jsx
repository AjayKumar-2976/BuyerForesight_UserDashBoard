import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import UserDetail from "./Pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;