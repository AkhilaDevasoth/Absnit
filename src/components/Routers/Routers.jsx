import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import IndustriesWeServe from '../Pages/IndustrieWeServe';
import TechologiesWeUse from '../Pages/TechnologiesWeUse';
import Healthcare from '../Pages/Healthcare';
import Education from '../Pages/Education';
import Manufacturing from '../Pages/Manufacturing';
import Finance from '../Pages/Finance';
import Retail from '../Pages/Retail';


const Routers = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/industries" element={<IndustriesWeServe />} />
                        <Route path="/industries/healthcare" element={<Healthcare />} />
                        <Route path="/industries/education" element={<Education />} />
                        <Route path="/industries/manufacturing" element={<Manufacturing />} />
                        <Route path="/industries/finance" element={<Finance />} />
                        <Route path="/industries/retail" element={<Retail />} />
                        <Route path="/technology" element={<TechologiesWeUse />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Routers;