import bgAbout from '../assets/about.jpg'

export default function AboutContent() {
    return (
        <>
            <div className="w-full bg-white py-[50px]">

                <div style={{ margin: '-300px 0 -500px -250px' }}>
                    <img src={bgAbout} />
                </div>
                
                {/* container */}
                <div className="max-w-[1240px] mx-auto mt-[80px]">
                    <div className="lg:max-w-[650px] md:max-w-[650px] text-center bg-black text-white p-5 mx-auto drop-shadow-lg rounded-xl">
                        <h1 className="lg:text-[100px] md:text-[100px] sm:text-[100px] xs:text-[80px] xxs:text-[50px] font-bold">Aster🌌id</h1>
                        <h4 className="lg:text-[25px] md:text-[25px] sm:text-[25px] xs:text-[20px] xxs:text-[15px] font-bold" style={{ color: 'gray', letterSpacing: '5px' }}>All About Space & Beyond</h4>

                        <div className="my-5">
                            <p className="my-5">
                                Welcome to 🌟 Asteroid 🚀, where the wonders of space and the frontiers of science collide! ⭐️🔭
                                At Asteroid 🌠, we embark on a cosmic journey that transcends the boundaries of our earthly existence. Our mission is to bring you the most captivating and awe-inspiring discoveries from the universe. 🌌✨
                            </p>
                            <p className="my-5">
                                We are a community of passionate enthusiasts, fueled by an insatiable hunger for knowledge and driven by the desire to share the marvels of the cosmos with fellow explorers like yourself. 🌍🚀✨
                            </p>
                            <p className="my-5">
                                Through captivating articles, stunning visuals, and engaging discussions, we aim to foster a community of discovery and learning. 📚🔬💡
                            </p>
                            <p className="my-5">
                                From the birth and evolution of stars to the mysteries of black holes, from the mind-bending realms of quantum mechanics to the possibilities of interstellar travel, we delve into a vast array of celestial topics. 🌟🌠⚛️
                            </p>
                            <p className="my-5">
                                But we are more than just purveyors of scientific knowledge; we are storytellers, weaving cosmic narratives that ignite your sense of wonder and beckon you to delve deeper into the mysteries of the universe. 📖✨🌌
                            </p>
                            <p className="my-5">
                                So, buckle up and join us on this epic cosmic odyssey! 🌌🚀 Let us embark together on a journey that will illuminate the universe and kindle the flame of curiosity within you. 🌠🔥💫
                            </p>
                            <p className="my-5">
                                Welcome to 🌟 Asteroid 🚀, where the stars are our guides, and the secrets of the cosmos await your exploration. Prepare to be astounded, enlightened, and inspired as we uncover the captivating mysteries of space and science, one discovery at a time. 🌟🔭✨
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

