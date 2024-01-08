import { useRef } from "react";
import "./Project.css";
import portfolioimages from "./ProjectImage";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    { id:1,
        title:"Portfolio",
        img: portfolioimages.CCAPDEVPORT,
        link:"https://github.com/navarrajosh/CCAPPDEV-PORTFOLIO.git",
        role: "BackEnd & Frontend",
        description:"This portfolio is a project in CCAPDEV, a Web Development Class, which showcase HTML, Bootstrap, CSS, and JavaScript for the Frontend and Backend of the website, along with Firebase as the database."
    },
    { id:2,
        title:"AMS",
        img: portfolioimages.StartekSystem,
        link:"https://www.figma.com/file/kiBl291U5WkVwwMUUe5b3c/High-Fidelity-Prototype?type=design&mode=design&t=xHxpfpdsYdqTgSov-1",
        role: "BackEnd & Frontend",
        description:"Asset Mangement System Wireframe created in Figma, which have a brief layout of the website."
    },
    { id:3,
        title:"AMS",
        img: portfolioimages.AMS,
        link:"https://github.com/kou-ai/it-asset-management.git",
        role: "BackEnd & Frontend",
        description:"Asset Mangement System is a Web Application that showcase employee's assets, add, edit, delete, and view of employees and assets. The web application is created through Express, Tailwind CSS, NodeJS, and SQL Server."
    },
    { id:4,
        title:"Stumble",
        img: portfolioimages.Stumble,
        link:"https://www.figma.com/file/gmt4x7VJqiDD6RvfAliZim/MOBDEV-WIREFRAME?type=design&mode=design&t=xHxpfpdsYdqTgSov-1",
        role: "BackEnd & Frontend",
        description:"Stumble is a Wireframe Project of a Mobile Application, that presents the whole layout of the mobile application."
    },
    { id:5,
        title:"Switchboard",
        img: portfolioimages.ECOM,
        link:"https://www.figma.com/file/4FoAH5ENswMPNsImJxTKbm/ITSRAQA-Switchboard?type=design&mode=design&t=xHxpfpdsYdqTgSov-1",
        role: "BackEnd & Frontend",
        description:"Switchboard is a High-Fidelity Prototype Project of an E-Commerce Sports Website, which presents the different layouts of the website in terms of web browser and on a mobile application."
    },
    { id:6,
        title:"KiloWhat",
        img: portfolioimages.KiloWhat,
        link:"https://www.figma.com/file/wCPWzMvpX9ii9xJiBeJjDt/KiloWhat?type=design&mode=design&t=xHxpfpdsYdqTgSov-1",
        role: "BackEnd & Frontend",
        description:"KiloWhat is a High-Fidelity Prototype Project. It is a Electricty Tracker Mobile Appliaction that showcase the User Interface of the mobile application as well as its features."
    },
    { id:7,
        title:"MizuMizu",
        img: portfolioimages.MizuMizu,
        link:"https://www.figma.com/file/kiBl291U5WkVwwMUUe5b3c/High-Fidelity-Prototype?type=design&mode=design&t=xHxpfpdsYdqTgSov-1",
        role: "BackEnd & Frontend",
        description:"MizuMizu is a High-Fidelity Prototype Project. It is an Aquatic E-commerce Mobile Application, that views the whole User Interface as well as the navigation of the application."
    },
    
   
]

const Single = ({item})=>{
    const ref=useRef();
    const {scrollYProgress} = useScroll({
        target: ref, 
        
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return(
        <section>
            <div className="containerProject">
                <div className="wrapperProject">
                    <div className="imgContainer" ref={ref}>
                    <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainerProject" style={{y}}>
                        <h2>{item.title}</h2>
                        <h3>{item.role}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Open Project</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
    return (  
        <div ref={ref} className="projectContainer">
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}

        </div>
    );
}
 
export default Projects;