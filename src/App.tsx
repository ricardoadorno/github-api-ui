import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          {/* <Route path="/user/:login" element={<UserPage />} /> */}
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
