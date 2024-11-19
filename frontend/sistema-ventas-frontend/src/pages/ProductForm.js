import React, { useState } from 'react';
import { crearProducto } from '../services/productService';


const ProductForm = () => {
    const [producto, setProducto] = useState({
        codigo: '',
        nombre: '',
        valor_venta: '',
        maneja_iva: '',
        porcentaje_iva: '',
    });

    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearProducto(producto);
            alert('Producto creado exitosamente');
            setProducto({
                codigo: '',
                nombre: '',
                valor_venta: '',
                maneja_iva: '',
                porcentaje_iva: '',
            });
        } catch (error) {
            alert('Error al crear producto');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registrar producto</h1>
            <div>
                <label>Código:</label>
                <input type="number" name="codigo" value={producto.codigo} onChange={handleChange} required />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
            </div>
            <div>
                <label>Valor de venta:</label>
                <input type="number" name="valor_venta" value={producto.valor_venta} onChange={handleChange} required />
            </div>
            <div>
                <label>Maneja iva?:</label>
                <input type="checkbox" name="maneja_iva" value="True" onChange={handleChange} />
            </div>
            <div>
                <label>Porcentaje de iva:</label>
                <input type="number" name="porcentaje_iva" value={producto.porcentaje_iva} onChange={handleChange} required />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default ProductForm;
