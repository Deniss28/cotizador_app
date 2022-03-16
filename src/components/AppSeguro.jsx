import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Resultado from "./Resultado";
import Spinner from "./Spinner";

const AppSeguro = () => {
  const { cargando } = useCotizador();
  return (
    <>
      <header className="mt-7">
        <h1 className="text-white text-center text-5xl font-bold">
          Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className="bg-white mt-7 rounded-lg md:w-2/3 lg:w-2/4 mx-auto shadow p-9">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  )
}

export default AppSeguro