import { useState } from 'react'
import { menu, close, logo } from '../assets'

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const handleToggleBtn = () => setToggle(!toggle)

    return (
        <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
            <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">

                {/* Logo */}
                <div className="flex">
                    <img src={logo} alt="logo" className="ml-12 md:ml-3 opacity-[100%] w-full h-[40px] " />
                </div>

                {/* Nab Menu */}
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        {/* <li>Pricing</li> */}
                    </ul>
                </div>

                {/* Nav Login/SignUp btns */}
                <div className="hidden md:flex sm:mr-10 md:mr-10">
                    <button className="border-none bg-transparent text-black mr-4 ml-[-10rem]">Login</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>

                {/* Hamburger-menu btn */}
                <div className="md:hidden" onClick={handleToggleBtn}>
                    <img src={!toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
                </div>
            </div>

            {/* Mobile-menu */}
            <ul className={toggle ? `absolute bg-white w-full px-8 md:hidden` : 'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <div className="flex flex-col my-4">
                    <button className=" bg-transparent text-black mb-4 py-3 px-8">Login</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>
        </div >
    )
}
