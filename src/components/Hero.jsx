import profile from "../assets/Nitish_rai_profile.jpg";
import {motion} from 'framer-motion'

const container = (delay) =>({
    hidden:{x:-100 ,opacity:0},
    visible:{
        x:0 ,
        opacity:1,
        transition:{duration:0.6 , delay: 1}
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4  lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-12 lg:text-7xl">Nitish Rai</motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial='hidden'
                        animate='visible'
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial='hidden'
                        animate='visible'
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">As a highly motivated and enthusiastic fresher, I am excited to embark on a career as a Frontend developer. I am confident in my ability to design, develop, and deploy scalable and efficient applications.

                            With a solid understanding of both front-end . Proficient in a range of programming languages, including JavaScript, HTML/CSS, Python, JAVA , React.js , mysql , postgresql and I am eager to apply my skills to real-world projects and continue learning and growing as a developer.</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x:100 , opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5 , delay: 1}}
                        src={profile} alt="profile Pic"  style={{width:300 , height:'auto' , border:'4px solid' , borderImage: 'linear-gradient(to bottom, #FFC5C5, #708090, #7A288A) 1'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero