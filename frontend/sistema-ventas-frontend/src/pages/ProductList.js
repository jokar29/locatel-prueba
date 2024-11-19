import React, { useEffect, useState } from 'react';
import { obtenerProducto } from '../services/productService';

const ProductList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const data = await obtenerProducto();
                setProductos(data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };
        fetchProductos();
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Valor de Vanta</th>
                        <th>Maneja iva ?</th>
                        <th>Porcentaje iva</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.codigo}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.valor_venta}</td>
                            <td>{producto.maneja_iva}</td>
                            <td>{producto.porcentaje_iva}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
