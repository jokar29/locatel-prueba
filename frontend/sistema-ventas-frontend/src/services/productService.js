import api from '../axiosConfig';


export const obtenerProducto = async () => {
    try {
        const response = await api.get('productos/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
};

export const crearProducto = async (producto) => {
    try {
        const response = await api.post('productos/', producto);
        return response.data;
        
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
};
