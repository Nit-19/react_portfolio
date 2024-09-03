import cynthia_2 from '../assets/cynthia_2.png';
import age_cal from '../assets/age_cal.png';
import {motion} from 'framer-motion'

const Project = () => {
    return (
        <div className="borber-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:.5}}
            className="my-20 text-center text-4xl">Projects</motion.h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    whileInView={{opacity:1 , x:0}}
                    initial={{x : -100 , opacity:0}}
                    
                    transition={{duration:0.5 , delay:.5}}
                    className="flex items-center justify-center">
                        <img className="rounded-2xl " src={cynthia_2} alt="about_me_img" style={{ width: 400, height: 200, boxShadow: '0px 0px 20px rgba(150,150,150,0.7), 0px 0px 40px rgba(150,150,150,0.7)' }} />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : 100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tight text-m mb-20">
                            <span className='text-xl' ><b><a href="https://nit-19.github.io/Cynthia-ugwu-clone/" target='_blank'>Cynthia Ugwu 2.0</a></b> </span><br /><br />
                            <span>Cynthia Ugwu is a frontend development project created as a practice exercise to enhance web development skills. Built using HTML, CSS, and JavaScript, the project focuses on implementing modern web design principles and creating a user-friendly interface. This website serves as a demonstration of proficiency in frontend technologies, showcasing the ability to design, style, and add interactivity to web pages while maintaining clean and efficient code.</span>
                            <br />
                            <div className='my-2'>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>HTML</span>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>CSS</span>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                            </div>
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    whileInView={{opacity:1 , x:0}}
                    initial={{x : -100 , opacity:0}}
                    
                    transition={{duration:0.5 , delay:.5}}
                    className="flex items-center justify-center">
                        <img className="rounded-2xl " src={age_cal} alt="about_me_img" style={{ width: 400, height: 210, boxShadow: '0px 0px 20px rgba(150,150,150,0.7), 0px 0px 40px rgba(150,150,150,0.7)', objectFit: 'contain' }} />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        whileInView={{opacity:1 , x:0}}
                        initial={{x : 100 , opacity:0}}
                        
                        transition={{duration:0.5 , delay:.5}}
                        className="my-2 max-w-xl py-6 font-light tracking-tight text-m mb-20">
                            <span className='text-xl' ><b> <a href="https://agecalculator-nitish-rais-projects.vercel.app/" target='_blank'>Age Calculator</a> </b> </span><br /><br />
                            <span>
                                I created an age calculator as part of a Frontend Mentor assignment, emphasizing both functionality and design. The goal was to develop a user-friendly tool that accurately calculates age based on user input. I focused on achieving a nearly pixel-perfect layout using HTML, CSS, and JavaScript, enhancing my skills in creating clean, responsive interfaces while ensuring the application's reliability.
                            </span>
                            <br />
                            <div className='my-2'>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>HTML</span>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>CSS</span>
                                <span className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                            </div>

                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project