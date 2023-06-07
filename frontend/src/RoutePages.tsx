import Certificates from './pages/Certificates';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cases from './pages/Cases';
import CaseDetails from './pages/CaseDetails';
import ParticipantForms from './pages/ParticipantForms';

const RoutePages = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/cases" element={<Cases />} />
                    <Route path="/cases/details" element={<CaseDetails />} />
                    <Route path="/participant/forms" element={<ParticipantForms />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutePages;