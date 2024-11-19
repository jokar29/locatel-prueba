import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteList from './pages/ClienteList';
import ClienteForm from './pages/ClienteForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClienteList />} />
                <Route path="/crear-cliente" element={<ClienteForm />} />
            </Routes>
        </Router>
    );
};

export default App;
