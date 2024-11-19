import React, { useEffect, useState } from 'react';
import { obtenerClientes } from '../services/clienteService';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const data = await obtenerClientes();
                setClientes(data);
            } catch (error) {
                console.error('Error al cargar los clientes:', error);
            }
        };
        fetchClientes();
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.cedula}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClienteList;
