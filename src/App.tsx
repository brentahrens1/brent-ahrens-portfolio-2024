import './App.css';
import Navbar from './components/partials/navigation/navbar';
import Footer from './components/partials/footer/footer';
import Home from './components/pages/home';
function App() {
  return (
    <div className="App font-fkgrotesk">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
