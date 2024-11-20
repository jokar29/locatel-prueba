import React, { useEffect, useState } from 'react';
import { obtenerVentas } from '../services/VentaService';

const VentaList = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        const fetchVentas = async () => {
            try {
                const data = await obtenerVentas();
                console.log(data)
                setVentas(data);
            } catch (error) {
                console.error('Error al cargar los clientes:', error);
            }
        };
        fetchVentas();
    }, []);

    return (
        <div>
            <h1>Lista de Ventas</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Consecutivo</th>
                        <th>Fecha</th>
                        <th>Total venta</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.id}>
                            <td>{venta.consecutivo}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.total_venta}</td>
                            {/* <td>{venta.cliente_id}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VentaList;
