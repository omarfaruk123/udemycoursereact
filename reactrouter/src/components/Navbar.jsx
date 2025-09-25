import { Link } from "react-router"

function Navbar(){
    return (

        <header>
            <nav className="bg-gray-800 p-4 text-white">
                <ul className="flex justify-center gap-6 font-medium">
                    <li> <Link to="/" className="hover:text-blue-500"> Home </Link></li>
                    <li> <Link to="/about" className="hover:text-blue-500"> About </Link></li>
                    <li> <Link to="/service" className="hover:text-blue-500"> Services </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar