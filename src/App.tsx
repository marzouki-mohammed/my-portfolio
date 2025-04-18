import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import AllExperience from "./pages/AllExperience";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import Postes from "./pages/Postes";
import Certif from "./pages/Certif";
import Projects from "./pages/Projects";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<AllExperience />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="postes" element={<Postes />} />
          <Route path="certification" element={<Certif />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App