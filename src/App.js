import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import SnackList from './SnackList';
import Snack from './Snack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snacks" element={<SnackList />} />
        <Route path="/snacks/:id" element={<Snack />} />
      </Routes>
    </Router>
  );
}

export default App;
