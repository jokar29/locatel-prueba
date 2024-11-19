import api from '../axiosConfig';

export const obtenerClientes = async () => {
    try {
        const response = await api.get('clientes/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        throw error;
    }
};

export const crearCliente = async (cliente) => {
    try {
        const response = await api.post('clientes/', cliente);
        return response.data;
    } catch (error) {
        console.error('Error al crear cliente:', error);
        throw error;
    }
};
