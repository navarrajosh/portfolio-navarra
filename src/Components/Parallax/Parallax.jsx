import { useRef } from "react";
import "./Parallax.css";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    const ytext = useTransform(scrollYProgress,[0,1], ["0%", "500%"]);
    const ybg = useTransform(scrollYProgress,[0,1], ["0%", "100%"]);

    return (  
        <div ref={ref} className="parallax">
            <motion.h1 style={{y:ytext}}>
                Projects    
            </motion.h1>
            <motion.div style={{y:ybg}} className="base"></motion.div>
            <motion.div style={{x:ybg}} className="skies"></motion.div>
        </div>
    );
}
 
export default Parallax;