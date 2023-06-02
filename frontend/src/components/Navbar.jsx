import { useState } from 'react'
import { menu, close, logo } from '../assets'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { RiArticleLine } from 'react-icons/ri'
import { FcAbout } from 'react-icons/fc'
import '../App.css'



export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const handleToggleBtn = () => setToggle(!toggle)

    const [activeLink, setActiveLink] = useState(null)
    const handleLinkClick = (i) => {
        window.scrollTo(0, 0);
        setActiveLink(i)
    }





    return (
        <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
            <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">

                {/* Logo */}
                <div className="flex">
                    <Link to="/" onClick={() => handleLinkClick()}>
                        <img src={logo} alt="logo" className="ml-12 md:ml-3 opacity-[100%] w-[125px] h-[60px] " />
                    </Link>
                </div>

                {/* Nab Menu */}
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <Link to="/" onClick={() => handleLinkClick(1)} className={activeLink === 1 ? 'activeLink' : ''}>
                            <li className='font-semibold drop-shadow-2xl'>Home</li>
                        </Link>
                        <Link to="/articles" onClick={() => handleLinkClick(2)} className={activeLink === 2 ? 'activeLink' : ''}>
                            <li className='font-semibold'>Browse Articles</li>
                        </Link>
                        <Link to="/author" onClick={() => handleLinkClick(3)} className={activeLink === 3 ? 'activeLink' : ''}>
                            <li className='font-semibold '>Author</li>
                        </Link>
                        <Link to="/about" onClick={() => handleLinkClick(4)} className={activeLink === 4 ? 'activeLink' : ''}>
                            <li className='font-semibold '>About</li>
                        </Link>
                    </ul>
                </div>

                {/* Nav Login/SignUp btns */}
                <div className="hidden md:flex sm:mr-10 md:mr-10" style={{ margin: 0 }}>
                    <a href="https://github.com/fifolio/Asteroid" target="_blank">
                        <button className="px-4 py-3 font-bold rounded-lg">
                            <AiFillGithub className='animate-[ping_1s_ease-in-out_infinite]' style={{ position: 'absolute', float: 'left', margin: '0 10px 0 0', padding: 0, fontSize: '25px' }} />
                            <AiFillGithub style={{ float: 'left', margin: '0 10px 0 0', padding: 0, fontSize: '25px' }} />
                            Github Repo</button>
                    </a>
                </div>

                {/* Hamburger-menu btn */}
                <div className="md:hidden" onClick={handleToggleBtn} style={{ cursor: 'pointer' }}>
                    <img src={!toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
                </div>
            </div>

            {/* Mobile-menu */}
            <ul className={toggle ? `absolute bg-white w-full px-8 md:hidden` : 'hidden'}>
                <Link to="/" onClick={() => handleLinkClick()}>  <li className='font-semibold hover:font-bold'><FaHome className='menu-icon' /> Home</li></Link>
                <Link to="/articles" onClick={() => handleLinkClick()}><li className='font-semibold hover:font-bold'><RiArticleLine className='menu-icon' /> Browse Articles</li></Link>
                <Link to="/author" onClick={() => handleLinkClick()}> <li className='font-semibold hover:font-bold'><BsFillPersonCheckFill className='menu-icon' /> Author</li></Link>
                <Link to="/about" onClick={() => handleLinkClick()}><li className='font-semibold hover:font-bold'><FcAbout className='menu-icon' /> About</li></Link>
                <div className="my-4">
                    <a href="https://github.com/fifolio/Asteroid" target="_blank">
                        <button className="px-4 py-3 font-bold min-w-full">Github Repo</button>
                    </a>
                </div>
            </ul>
        </div >
    )
}
