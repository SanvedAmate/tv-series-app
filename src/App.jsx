/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Pages/Header.jsx'; 
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/ShowDetails/:id" element={<ShowDetails />} />
        <Route path="/bookingform/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
