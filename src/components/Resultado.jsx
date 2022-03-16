import { useCallback, useRef } from 'react'
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constans'

const Resultado = () => {

  // useMemo es parecido a calback solo que se utiliza con ()=> y mejora
  // el rendimiento de la app si es lenta
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  const yearRef = useRef(year);
  // congela el state para luego mutarlo

  const [nombreMarca] = useCallback(
    MARCAS.filter(m => m.id === Number(marca)),
    [resultado])
  // se filtra por el id del objeto
  // ? solo va a cambiar el state cuando resultado se modifique,
  // asi que hace un memorizado

  const [filtrarPlanes] = useCallback(
    PLANES.filter(p => p.id === Number(plan)),
    [resultado]);

  if (resultado === 0) return null;

  return (

    <div className="text-center bg-gray-100 mt-5 p-5 shadow-md">
      <h2 className="text-gray-700 font-black text-3xl">Resumen</h2>
      <p className="mt-2 my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="mt-2 my-2">
        <span className="font-bold">Plan: </span>
        {filtrarPlanes.nombre}
      </p>

      <p className="mt-2 my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>
      <p className="mt-2 my-2 text-3xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado