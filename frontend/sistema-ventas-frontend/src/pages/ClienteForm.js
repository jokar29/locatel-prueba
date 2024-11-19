import React, { useState } from 'react';
import { crearCliente } from '../services/clienteService';

const ClienteForm = () => {
    const [cliente, setCliente] = useState({
        cedula: '',
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
    });

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearCliente(cliente);
            alert('Cliente creado exitosamente');
            setCliente({
                cedula: '',
                nombre: '',
                direccion: '',
                telefono: '',
                email: '',
            });
        } catch (error) {
            alert('Error al crear cliente');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registrar Cliente</h1>
            <div>
                <label>Cédula:</label>
                <input type="text" name="cedula" value={cliente.cedula} onChange={handleChange} required />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={cliente.nombre} onChange={handleChange} required />
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" name="direccion" value={cliente.direccion} onChange={handleChange} required />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="text" name="telefono" value={cliente.telefono} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={cliente.email} onChange={handleChange} required />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default ClienteForm;
