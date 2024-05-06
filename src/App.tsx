import './App.css';
import Navbar from './components/partials/navigation/navbar';
import Footer from './components/partials/footer/footer';
import Home from './components/pages/home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-fkgrotesk">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
