import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteList from './pages/ClienteList';
import ClienteForm from './pages/ClienteForm';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import VentaForm from './pages/VentaForm';
import VentaList from './pages/VentaList';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/lista-clientes" element={<ClienteList />} />
                <Route path="/crear-cliente" element={<ClienteForm />} />
                <Route path="/lista-productos" element={<ProductList />} />
                <Route path="/crear-producto" element={<ProductForm />} />
                <Route path="/crear-venta" element={<VentaForm />} />
                <Route path="/lista-ventas" element={<VentaList />} />
            </Routes>
        </Router>
    );
};

export default App;
