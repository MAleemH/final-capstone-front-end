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
import BookAppointment from './pages/appointment/appointment';
// import Reservations from '../components/reservation/Reservations';

function App() {
  return (
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
          <Route path="/therapistdetails" element={<TherapistDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          {/* <Route path="/reservations" element={<Reservations />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
