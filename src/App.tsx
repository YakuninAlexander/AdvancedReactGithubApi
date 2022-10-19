import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigations';
import { FavouritesPage } from './pages/FavouritesPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favourites' element={<FavouritesPage />} />
    </Routes>
    </>
  )
}