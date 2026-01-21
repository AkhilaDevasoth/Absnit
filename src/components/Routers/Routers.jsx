import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import IndustriesWeServe from '../Pages/Industries We Serve';
import TechologiesWeUse from '../Pages/Techologies We Use';

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