import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:.5}}
            className="mt-20 mb-20 text-center text-4xl text-neutral-300">Get in touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.div
                whileInView={{opacity:1 , x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:.5}}
                className="flex items-center justify-center mb-4">
                    <span className="mr-2">
                        <FaLocationDot />
                    </span>
                    <p className="text-neutral-300">Sector 24 , DLF Phase 3 , Gurgaon, India</p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1 , x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:.5}}
                className="flex items-center justify-center mb-4">
                    <span className="mr-2">
                        <IoIosCall />
                    </span>
                    <p className="text-neutral-300">+91 8708576389</p>
                </motion.div>
                <motion.div
                
                whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:.5}}
            className="flex items-center justify-center">
                    <span className="mr-2">
                        <MdOutlineMail />
                    </span>
                    <p className="text-neutral-300">kalranitish787@gmail.com</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact