import { NavLink } from "react-router"

function Navbar(){
    return (

        <header>
            <nav className="bg-gray-800 p-4 text-white">
               <ul className="flex justify-center gap-6 font-medium">
                    <li> <NavLink to="/" className={({isActive}) => isActive ? 'text-red-500' : 'text-white'}> Home </NavLink></li>
                    <li> <NavLink to="/about" className={({isActive}) => isActive ? 'text-red-500' : 'text-white'}> About </NavLink></li>
                    <li> <NavLink to="/service" className={({isActive}) => isActive ? 'text-red-500' : 'text-white'}> Services </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar