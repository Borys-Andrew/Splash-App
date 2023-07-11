import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './Pages/HomePage';
import { RegistrationPage } from './Pages/RegistrationPage';
import { LoginPage } from './Pages/LoginPage';
import { GalleryPage } from './Pages/GalleryPage';
import { FavoritePage } from './Pages/FavoritePage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Footer } from './components/Footer';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
