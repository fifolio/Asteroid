import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {

    const getDate = new Date();
    const getYear = getDate.getFullYear()

    return (
        <div className="w-full bg-black text-gray-200 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-[1px] border-gray-500 pb-8">

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Solutions
                    </h6>

                    <ol>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Solutions
                    </h6>

                    <ol>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Solutions
                    </h6>

                    <ol>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                    </ol>
                </div>

                <div>
                    <h6 className="font-bold uppercase py-2">
                        Solutions
                    </h6>

                    <ol>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
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
