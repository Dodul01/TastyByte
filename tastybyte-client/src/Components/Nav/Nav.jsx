import { Link, NavLink } from "react-router-dom"
import { BsMenuButton } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between lg:p-5 md:p-3 p-1 bg-[#F8F8F8]">
            <div>
                <Link to='/'>
                    <h1 className="text-2xl font-extrabold text-[#E03546]">TastyByte</h1>
                </Link>
            </div>
            <div>
                {/* when user log in show this */}
                {/* <input type="search" />
                <button>Search</button> */}
            </div>
            <div className="lg:flex md:flex hidden items-center justify-center gap-8">
                <NavLink className='font-semibold' to='/menu'>Menu</NavLink>
                <NavLink className='font-semibold' to='/addRestaurant'>Add Restaurant</NavLink>
                <Link className="bg-[#E03546] px-5 py-2 text-white font-medium rounded-lg" to='/signIn'>Sign In</Link>
            </div>

            {/* Responsive menu  */}
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden md:hidden flex">
                <BsMenuButton className="text-2xl m-2" />
            </div>
            <div className={`absolute top-0  z-10 h-[100vh] w-full lg:hidden md:hidden bg-slate-300 ${isMenuOpen ? 'right-0' : 'right-[800px]'} transition-all`}>
                <RxCross1 onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl m-2 float-right" />
                <div className="flex flex-col gap-5 text-center p-4">
                    <h1 className="text-2xl font-extrabold">TastyByte</h1>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='/addRestaurant'>Add Restaurant</NavLink>
                    <Link className="bg-[#E03546] px-5 py-2 text-white font-medium rounded-lg" to='/signIn'>Sign In</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav