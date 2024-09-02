import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiPowerbi } from "react-icons/si";

import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: 'reverse'
        }
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-32">
            <motion.h2
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-7">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <FaBootstrap className="text-7xl text-purple-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <RiTailwindCssFill className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <RiJavascriptLine className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <FaJava className="text-7xl text-red-800" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <FaPython className="text-7xl text-blue-800" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <DiMysql className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <PiMicrosoftExcelLogoFill className="text-7xl text-green-700" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" style={{ boxShadow: '0px 0px 20px rgba(250,250,250,0.2), 0px 0px 40px rgba(250,250,250,0.1)' }}>
                    <SiPowerbi className="text-7xl text-yellow-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies