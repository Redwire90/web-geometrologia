export const Programer = () => {
  return (
    <section className="grid grid-cols-2 items-end mx-80 mb-16 gap-16">
      <div className="">
        <h1 className="pb-8 text-green-600 text-[40px] font-bold">PROGRAME SU SERVICIO</h1>
        <p className="text-justify">
          Ahora puede programar cualquier solicitud de servicio técnico desde nuestra página lo cual le permitirá siempre tener el control de entrega y recibido de los instrumentos así como el tiempo que tardará el laboratorio en procesar la solicitud.
        </p>
      </div>  
      <div className="flex place-content-end ">
        <button className="hover:bg-blue-600 font-bold border hover:text-white border-blue-500 rounded w-[200px] h-[40px] transition ease-in-out duration-500">🗻Ingresa Aquí</button>
      </div>
    </section>
  )
}
