import useCotizador from "../hooks/useCotizador"

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className="p-4 w-full border border-red-600 rounded-sm bg-white text-center">
      <p className="text-red-700  font-bold text-2xl uppercase">{error}</p>
    </div>
  )
}

export default Error