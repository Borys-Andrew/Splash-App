import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './Pages/HomePage';
import { RegistrationPage } from './Pages/RegistrationPage';
import { LoginPage } from './Pages/LoginPage';
import { GalleryPage } from './Pages/GalleryPage';
import { FavoritePage } from './Pages/FavoritePage';
import { NotFoundPage } from './Pages/NotFoundPage';
import './App.scss';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={(
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            )}
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/gallery"
            element={(
              <ProtectedRoute>
                <GalleryPage />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/favorite"
            element={(
              <ProtectedRoute>
                <FavoritePage />
              </ProtectedRoute>
            )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
