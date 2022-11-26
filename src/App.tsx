import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Search from "./components/pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
