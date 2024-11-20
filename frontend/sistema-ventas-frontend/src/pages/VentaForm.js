// src/components/VentaForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VentaForm = () => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [clienteId, setClienteId] = useState('');
  const [totalVenta, setTotalVenta] = useState(0);
  const [consecutivo, setConsecutivo] = useState('');
  
  // Obtener clientes y productos al cargar el componente
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/clientes/')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Error fetching clientes:', error));

    axios.get('http://127.0.0.1:8000/api/productos/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error fetching productos:', error));
  }, []);

  // Función para agregar un detalle de venta
  const agregarDetalle = (producto, valorProducto, iva) => {
    const nuevoDetalle = {
      producto_id: producto.id,
      valor_producto: valorProducto,
      iva_calculado: iva,
    };
    setDetalles([...detalles, nuevoDetalle]);
    setTotalVenta(prevTotal => prevTotal + valorProducto + iva);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaVenta = {
      cliente_id: clienteId,
      consecutivo: consecutivo,
      detalles: detalles,
      total_venta: totalVenta,
    };
    
    axios.post('http://127.0.0.1:8000/api/ventas/', nuevaVenta)
      .then(response => {
        alert('Venta registrada exitosamente');
        // Resetear formulario después del envío
        setDetalles([]);
        setClienteId('');
        setTotalVenta(0);
        setConsecutivo('');
      })
      .catch(error => {
        console.error('Error registrando la venta:', error);
        alert('Hubo un error al registrar la venta');
      });
  };

  return (
    <div>
      <h2>Registrar Venta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cliente:</label>
          <select value={clienteId} onChange={(e) => setClienteId(e.target.value)} required>
            <option value="">Seleccionar Cliente</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>{cliente.nombre}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Consecutivo:</label>
          <input type="text" value={consecutivo} onChange={(e) => setConsecutivo(e.target.value)}  />
        </div>
        
        <div>
          <h3>Detalles de la Venta</h3>
          <div>
            <label>Producto:</label>
            <select onChange={(e) => {
              const producto = productos.find(p => p.id === parseInt(e.target.value));
              if (producto) {
                const iva = producto.maneja_iva ? (producto.valor_venta * producto.porcentaje_iva) / 100 : 0;
                agregarDetalle(producto, producto.valor_venta, iva);
              }
            }}>
              <option value="">Seleccionar Producto</option>
              {productos.map(producto => (
                <option key={producto.id} value={producto.id}>{producto.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <ul>
              {detalles.map((detalle, index) => (
                <li key={index}>
                  Producto ID: {detalle.producto_id} - Valor: {detalle.valor_producto} - IVA: {detalle.iva_calculado}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <label>Total Venta: </label>
          <input type="text" value={totalVenta}  />
        </div>

        <button type="submit">Registrar Venta</button>
      </form>
    </div>
  );
};

export default VentaForm;
