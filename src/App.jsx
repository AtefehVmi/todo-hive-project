import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
