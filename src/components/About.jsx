import about_me from "../assets/about_me.avif";
import {motion} from 'framer-motion'
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : -100 , opacity:0}}
                        transition={{duration:0.5 , delay:0.5}}
                        className="rounded-3xl " src={about_me} alt="about_me_img" style={{ width: 425, height: 'auto', boxShadow: '0px 0px 20px rgba(150,150,150,0.3), 0px 0px 40px rgba(150,150,150,0.3)' }} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <motion.p
                            whileInView={{opacity:1 , x:0}} 
                            initial={{x : 100 , opacity:0}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="my-2 max-w-xl py-6 font-light tracking-tight text-lg mb-20">
                                As a passionate frontend developer, I craft exceptional user experiences with a focus on responsiveness, scalability, and maintainability. With expertise in HTML5, CSS3, JavaScript (ES6+), and React, I create visually stunning and highly interactive interfaces that delight users. I take a user-centered approach to development, prioritizing accessibility, performance, and usability, and stay current with the latest trends and best practices in frontend development. With a keen eye for detail and a passion for innovation, I'm always looking for ways to improve my craft, whether it's exploring new technologies or optimizing existing ones to deliver fast, seamless, and engaging experiences that meet and exceed user expectations.
                            </motion.p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About