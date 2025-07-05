import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About_us from './pages/about/About_us';
import Services from './pages/services/Services';
import Contact_us from './pages/contact/Contact_us';
import Hire_talent from './pages/hire_talent/Hire_talent';
import Find_job from './pages/Find_Job/Find_job';
import Scroll_On_Top from './components/Scroll_On_Top';

function App() {
  return (
    <div className="App">
       <Router>
        <Scroll_On_Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/hire_talent" element={<Hire_talent />} />
        <Route path="/Find_job" element={<Find_job />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
