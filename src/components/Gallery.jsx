import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'

export const Gallery = () => {
  return (
    <section className='px-80'>
      <h2 className='text-[40px] font-bold pb-[20px] text-cyan-900'>NUESTRO SERVICIO</h2>
      <div className='flex h-[500px] pb-[32px] overflow-hidden'>
        <img src={img1} alt='imag1' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img2} alt='imag2' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img3} alt='imag3' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img4} alt='imag4' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img5} alt='imag5' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img6} alt='imag6' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img7} alt='imag7' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>
        <img src={img8} alt='imag8' className='w-0 grow object-cover opacity-95 transition-ease delay-150 hover:w-[600px] hover:opacity-100 hover:cursor-crosshair hover:contrast-[1.1] duration-700'/>       
      </div>

    </section>
  )
}
