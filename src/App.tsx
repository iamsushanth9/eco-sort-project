import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UploadProvider } from './context/UploadContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import EducationPage from './pages/EducationPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <ThemeProvider>
      <UploadProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </UploadProvider>
    </ThemeProvider>
  );
}

export default App;