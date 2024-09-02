import {motion} from 'framer-motion'

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                Education
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex items-center justify-center">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : -100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300"><strong className="text-lg">Aug 2023 - May 2024</strong></motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p 
                        whileInView={{opacity:1 , x:0}}
                        initial={{x: 100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300">
                            <strong className="text-xl">Bosscoder Academy (Full Stack Development)</strong><br></br> <br />
                            <span className="text-m"> I completed an extensive full-stack development course at Boscoder Academy, where I gained practical experience in creating and deploying web applications. The curriculum included front-end technologies such as HTML, CSS, JavaScript, and React, alongside back-end development with Node.js, Express, and databases like MongoDB and SQL. Additionally, I developed a strong foundation in programming with Java and Python, further enhancing my versatility as a full-stack developer.</span>
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex items-center justify-center">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : -100 , opacity:0}}
                        
                        transition={{duration:.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300"><strong className="text-lg">Jan 2023 - July 2023</strong></motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : 100 , opacity:0}}
                        
                        transition={{duration:.5, delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300">
                            <strong className="text-xl">Internshala Training (Full Stack Web Development) </strong><br/><br/>
                            <span className="text-m">I completed an extensive full-stack web development course at Internshala Trainings, where I gained hands-on experience in creating and deploying web applications. The curriculum included front-end technologies such as HTML, CSS, JavaScript, and React, along with back-end development using MySQL, PostgreSQL, and the basics of PHP. This course provided me with a comprehensive understanding of both client-side and server-side development, enhancing my skills as a full-stack developer.</span>
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex items-center justify-center">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : -100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300"><strong className="text-lg">Aug 2018 - Sep 2022</strong></motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : 100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300">
                            <strong className="text-xl">Maharaja Ranjit Singh Punjab Technical University, Bathinda, Punjab </strong> <br /><br />
                            I completed my B.Tech in Civil Engineering, where I developed strong analytical and problem-solving skills through rigorous coursework and projects. My studies involved structural analysis, project management, and critical thinking, which enhanced my ability to approach complex tasks with a structured and methodical mindset. The diverse challenges I encountered during my academic journey have equipped me with valuable skills that are applicable across various fields.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education