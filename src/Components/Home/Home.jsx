import { useElementSize, useMouse } from '@mantine/hooks';
import images from '../../Logo/Image';
import './Component.css';
import { motion } from "framer-motion";
import { Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Greeting = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const slidingGreeting = {
    initial:{
        x: 0,

    },
    animate:{
        x: "-350%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 35,
        },
    },
};
const Home = () => {
    //Ref Element
    
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Joseph", "Agustin", "Navarra"],
            startDelay: 450,
            typeSpeed: 200,
            backDelay: 200,
            backSpeed: 200,
            smartBackspace: false,
            showCursor: false,
            loop: true,
        })
    })

    return (  
        <div className="homeContainer">
            <div className="wrapper">
            <motion.div className="textContainer" variants={Greeting} initial="initial" animate="animate"  >
            <motion.img  variants={Greeting} src={images.gradientlogo} alt=""  className="HomeLogo"/>
                <motion.h1 variants={Greeting}>
                    Hi! my name is <span ref={el} className="greetingheader"></span>
                </motion.h1>
                <motion.h1 variants={Greeting}>
                    A Fresh <span className="greetingheader">IT Graduate</span>
                </motion.h1>
                <motion.p variants={Greeting} className="Introduction">
                From De La Salle University aspiring to become a Front-End Web Developer,<br/> 
                equipped with a solid foundation in the basics of web development. Eager to learn, <br/> 
                improve, and embracing flexibility across diverse tech stacks.
                </motion.p>
                <Button gradientDuoTone="purpleToBlue" className='talkbtn'>Talk to me!</Button>
            </motion.div>
            
            </div>
            <motion.div variants={slidingGreeting} animate="animate" className="slidingtext">
                Front End Web Developer
            </motion.div>
            <div className="HomePic">
                <img src={images.HomePicture} alt="HomePic" className="HomePic"/>
            </div>
        </div>
    );
}
 
export default Home;