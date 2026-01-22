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
import CustomSoftwareDevelopment from '../Pages/CustomSoftwareDevelopment';
import MobileAppDevelopment from '../Pages/MobileAppDevelopment';
import CloudSolutions from '../Pages/CloudSolutions';
import ITConsulting from '../Pages/ITConsulting';
import CybersecurityServices from '../Pages/CybersecurityServices';
import ProgrammingLanguages from '../Pages/ProgrammingLanguages';
import Frameworks from '../Pages/Frameworks';
import Database from '../Pages/Database';
import CloudPlatforms from '../Pages/CloudPlatforms';
import DevOpsTools from '../Pages/DevOpsTools';


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
                        <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
                        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
                        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
                        <Route path="/services/it-consulting" element={<ITConsulting />} />
                        <Route path="/services/cybersecurity-services" element={<CybersecurityServices />} />
                        <Route path="/industries" element={<IndustriesWeServe />} />
                        <Route path="/industries/healthcare" element={<Healthcare />} />
                        <Route path="/industries/education" element={<Education />} />
                        <Route path="/industries/manufacturing" element={<Manufacturing />} />
                        <Route path="/industries/finance" element={<Finance />} />
                        <Route path="/industries/retail" element={<Retail />} />
                        <Route path="/technology" element={<TechologiesWeUse />} />
                        <Route path="/technology/programming-languages" element={<ProgrammingLanguages />} />
                        <Route path="/technology/frameworks" element={<Frameworks />} />
                        <Route path="/technology/database" element={<Database />} />
                        <Route path="/technology/cloud-platforms" element={<CloudPlatforms />} />
                        <Route path="/technology/devops-tools" element={<DevOpsTools />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Routers;