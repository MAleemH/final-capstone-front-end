import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SplashPage from './pages/SplashPage';
import NotFoundPage from './pages/NotFoundPage';
import NewTherapistPage from './pages/NewTherapistPage';
import HomePage from './pages/HomePage';
import TherapistDetailsPage from './pages/TherapistDetailsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DeleteTherapist from './pages/DeleteTherapist';
import NewAppointment from './pages/NewAppointment';
import AppointmentPage from './pages/AppointmentPage';
import Therapists from './components/Therapists';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newtherapist" element={<NewTherapistPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/deletetherapist" element={<DeleteTherapist />} />
        <Route path="/therapistdetails/:id" element={<TherapistDetailsPage />} />
        <Route path="/book" element={<NewAppointment />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/therapy" element={<Therapists />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
