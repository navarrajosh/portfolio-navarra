import images from '../Logo/Image';
import './Component.css';
import { Button } from 'flowbite-react';
const Home = () => {
    return (  
        <div className="homePage">
            <img src={images.HomePicture} alt="HomePic" className="HomePic"/>
            <div className="grid grid-cols-1 gap-2">
                <div>
                    <img src={images.gradientlogo} alt=""  className="HomeLogo"/>
                </div>
                <div>
                    <h1 className="greetings">
                    Hi! my name is <span className="greetingheader">Josh</span>.
                    </h1>
                </div>
                <div>
                    <h1 className="greetings2">
                        A Fresh <span className="greetingheader">IT Graduate</span>.
                    </h1>
                </div>      
                </div>
                <p className="Introduction">
                        From De La Salle University, aspiring to be a Website Developer with 
                        a solid knowledge on the basics and with a discipline to learn different technology stacks.
                </p>
                <Button gradientDuoTone="purpleToBlue" className='talkbtn'>Talk to me!</Button>
            </div>
    );
}
 
export default Home;