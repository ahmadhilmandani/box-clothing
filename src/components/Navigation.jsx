import { Link, useLocation } from "react-router-dom"
import Box from '../assets/box.png'

function Navigation() {
  const location = useLocation();
  return (
    <nav className="bg-white w-full h-[72px] shadow-lg sticky top-0 left-0 right-0 z-[99] flex justify-between items-center px-11">
      <Link to={'/'}>
        <img src={Box} alt="" className="w-10 aspect-square" />
      </Link>
      <div className="flex justify-center items-center gap-8">
        <Link className={`hover:font-semibold ${location.pathname === '/' && 'font-semibold bg-amber-300 px-2 py-1 transition-all ease-in-out'}`} to={'/'}
        >
          Home
        </Link>
        <Link className={`hover:font-semibold ${location.pathname === '/shop' && 'font-semibold bg-amber-300 px-2 py-1 transition-all ease-in-out'}`} to={'shop'}
        >
          Shop
        </Link>
        <Link className={`hover:font-semibold ${location.pathname === '/sign-in' && 'font-semibold bg-amber-300 px-2 py-1 transition-all ease-in-out'}`} to={'sign-in'}
        >
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Navigation