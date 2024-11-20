import api from '../axiosConfig';


export const obtenerVentas = async () => {
    try {
        const response = await api.get('ventas/');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error al obtener ventas:', error);
        throw error;
    }
};

