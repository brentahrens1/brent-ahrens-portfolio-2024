import './App.css';
import Navbar from './components/partials/navigation/navbar';
import Footer from './components/partials/footer/footer';
import Home from './components/pages/home';
import Work from './components/pages/work';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-fkgrotesk">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
