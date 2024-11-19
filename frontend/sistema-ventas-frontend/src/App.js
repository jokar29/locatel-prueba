import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteList from './pages/ClienteList';
import ClienteForm from './pages/ClienteForm';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClienteList />} />
                <Route path="/crear-cliente" element={<ClienteForm />} />
                <Route path="/lista-productos" element={<ProductList />} />
                <Route path="/crear-producto" element={<ProductForm />} />
            
            </Routes>
        </Router>
    );
};

export default App;
