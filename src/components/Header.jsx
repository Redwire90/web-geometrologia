import Logo from '../Images/logo-sm.png'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mx-60 my-16'>
      <img className="object-scale-down w-80" src={Logo} alt='Logo'/>
      <NavBar/>
    </header>
  )
}
