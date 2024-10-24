import './App.css';
import Navbar from './components/partials/navigation/navbar';
import Footer from './components/partials/footer/footer';
import Home from './components/pages/home';
import Work from './components/pages/work';
import CaseStudy from './components/pages/case-studies/CaseStudy';
import Services from './components/pages/services';
import About from './components/pages/about';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-fkgrotesk overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/casestudy/:slug" element={<CaseStudy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;