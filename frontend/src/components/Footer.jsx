import { FaFacebook, FaGithub, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { SiFacebook } from 'react-icons/si'



export default function Footer() {

    const getDate = new Date();
    const getYear = getDate.getFullYear()

    return (
        <div className="w-full bg-black text-gray-200 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-[1px] border-gray-500 pb-8">

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Space News
                    </h6>

                    <ol>
                        <li className="py-1"><a href="https://space.com" target='_blank'>Space</a></li>
                        <li className="py-1"><a href="https://Newscientist.com" target='_blank'>News Cientist</a></li>
                        <li className="py-1"><a href="https://Spacenews.com" target='_blank'>Space News</a></li>
                        <li className="py-1"><a href="https://Theguardian.com" target='_blank'>The Guardian</a></li>
                        <li className="py-1"><a href="https://Scitechdaily.com" target='_blank'>Scitech Daily</a></li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Discover
                    </h6>

                    <ol>
                        <li className="py-1"><a href="https://nasa.gov" target='_blank'>NASA</a></li>
                        <li className="py-1"><a href="https://spacex.com" target='_blank'>Space X</a></li>
                        <li className="py-1"><a href="https://blueorigin.com" target='_blank'>Blue Origin</a></li>
                        <li className="py-1"><a href="https://virgingalactic.com" target='_blank'>Virgin Galactic</a></li>
                        <li className="py-1"><a href="https://relativityspace.com" target='_blank'>Relativity Space</a></li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Help
                    </h6>

                    <ol>
                        <li className="py-1">Careers</li>
                        <li className="py-1">Terms and conditions</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Accessibility</li>
                        <li className="py-1">Contact Asteroid</li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Follow Us
                    </h6>

                    <ol>
                        <li className="py-1"><SiFacebook className='menu-icon' style={{ color: '#1B9CFC' }} />Facebook</li>
                        <li className="py-1"><BsTwitter className='menu-icon' style={{ color: '#9AECDB' }} />Twitter</li>
                        <li className="py-1"><BsInstagram className='menu-icon' style={{ color: '#FD7272' }} />Instagram</li>
                        <li className="py-1"><FaTiktok className='menu-icon' style={{ color: '#CAD3C8' }} />TikTok</li>
                        <li className="py-1"><BsYoutube className='menu-icon' style={{ color: '#eb2f06' }} />YouTube</li>
                    </ol>
                </div>



                <div className="col-span-2 py-2 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to out Newsletter</p>

                    <p className="py-3">
                        Stay Connected with Asteroid's Newsletter! 🚀🌌
                        <br />
                        Ready to embark on an interstellar journey filled with mind-boggling discoveries and captivating cosmic wonders? 🌟
                    </p>

                    <form className="flex flex-col sm:flex-row text-black mt-2">
                        <input className="w-full p-2 mr-4 rounded-md  text-center" type="email" placeholder="📩 Enter your email..." />
                        <button className="p-2 bg-[#000000] font-bold">
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>

            <div className="max-w-[1240px] text-center text-sm text-gray-200 mt-7 mx-auto">
                <div className="flex justify-evenly sm:w-[300px]  text-2xl mx-auto">
                    <a href="https://www.facebook.com/Firas.Kingsdom/" target='_blank'>
                        <FaFacebook />
                    </a>
                    <a href="https://www.github.com/fifolio/asteroid" target='_blank'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/fifolio" target='_blank'>
                        <FaLinkedinIn />
                    </a>
                </div>
                <p className="mt-[20px]">
                    Coded with ❤ by fifolio {getYear}
                </p>

            </div>
        </div>
    )
}
