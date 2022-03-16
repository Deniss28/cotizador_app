import { useState, createContext } from 'react';
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();

// ** el provider es donde estara el state, se podra usar efectos y funciones
//** fuente de los datos

const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);


  const handleChangeDatos = (e) => {
    // se reescribe en el state y asigna datos
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;
    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    // hay que restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Europeo 30%
    // Americano 15% csto incremental
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);
    // Basico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan)

    // Formatear Dinero
    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 2000);

  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;