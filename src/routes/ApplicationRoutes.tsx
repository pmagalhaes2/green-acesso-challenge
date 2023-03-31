import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Character from "../pages/Character";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" Component={Character} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
