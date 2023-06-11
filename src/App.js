import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SplashPage from './pages/SplashPage';
import NotFoundPage from './pages/NotFoundPage';
import NewTherapistPage from './pages/NewTherapistPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newtherapist" element={<NewTherapistPage />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
