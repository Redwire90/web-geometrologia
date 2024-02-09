export const Programer = () => {
  return (
    <section className="grid grid-cols-2 items-end mx-80 mb-16 gap-16">
      <div className="">
        <h1 className="pb-8 text-green-600 text-[30px] font-bold">PROGRAME SU SERVICIO</h1>
        <p className="text-justify">
          Ahora puede programar cualquier solicitud de servicio técnico desde nuestra página lo cual le permitirá siempre tener el control de entrega y recibido de los instrumentos así como el tiempo que tardará el laboratorio en procesar la solicitud.
        </p>
      </div>  
      <div className="flex place-content-end ">
        <button className="bg-blue-500 font-bold w-[180px] h-[40px] rounded-md border-2 border-gray-800 transition duration-500 ease-in-out hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110"><span>Ingresa Aquí</span></button>
      </div>
    </section>
  )
}
