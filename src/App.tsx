import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SearchPage from "./components/pages/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/user/:login" element={<UserPage />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
