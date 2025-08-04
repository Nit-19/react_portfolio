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
                               As a data-driven professional, I specialize in analyzing and interpreting complex datasets to uncover actionable insights and support business decision-making. I have hands-on experience with tools like Excel, SQL, Power BI, Google Analytics, Meta Ads, and Python, enabling me to build interactive dashboards, track campaign performance, and drive digital growth strategies.

While my core strength lies in data analytics, I also have practical experience in frontend development (HTML, CSS, JavaScript, React.js) and a basic understanding of backend development, which helps me work efficiently on web-based dashboards and data integration projects.
                            </motion.p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About