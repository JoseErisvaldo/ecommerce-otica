import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/layout/header";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}
