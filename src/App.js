import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Grants from "./pages/Grants";

import NoPage from "./pages/NoPage";
import TemplateEmails from "./pages/TemplateEmails";
import Contact from "./pages/Contact";
import CoverLetter from "./pages/CoverLetter";

import Interview from "./pages/Interview";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="grants" element={<Grants />} />
          <Route path="coverLetter" element={<CoverLetter />} />
          <Route path="interview" element={<Interview />} />
          <Route path="templateEmails" element={<TemplateEmails />} />

          <Route path="admin" element={<Admin />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
