import images from '../Logo/Image';
import './Component.css';
import { Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    //Ref Element
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Joseph", "Agustin", "Navarra"],
            startDelay: 500,
            typeSpeed: 200,
            backDelay: 200,
            backSpeed: 200,
            smartBackspace: false,
            showCursor: false,
            loop: true,
        })
    })

    return (  
        <div className="homePage">
            <img src={images.HomePicture} alt="HomePic" className="HomePic"/>
            <div className="grid grid-cols-1 gap-2">
                <div>
                    <img src={images.gradientlogo} alt=""  className="HomeLogo"/>
                </div>
                <div className='HeaderName'>
                    <h1 className="greetings">
                    Hi! my name is <span ref={el} className="greetingheader"></span>.
                    </h1>
                </div>
                <div className='HeaderIntro'>
                    <h1 className="greetings2">
                        A Fresh <span className="greetingheader">IT Graduate</span>
                    </h1>
                </div>      
                </div>
                <p className="Introduction">
                From De La Salle University aspiring to become a web developer, equipped <br/> 
                with a solid foundation in the basics of web development. Eager to learn, <br/> 
                improve, and showcase fast adaptability skills while exploring diverse technology stacks.
                </p>
                <Button gradientDuoTone="purpleToBlue" className='talkbtn'>Talk to me!</Button>
            </div>
    );
}
 
export default Home;