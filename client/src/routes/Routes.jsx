import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Error404 from "../pages/Errorpage.jsx";
import Employee from "../pages/Employee.jsx";

const routes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};
export default routes;
