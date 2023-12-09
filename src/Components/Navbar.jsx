import './Component.css';
import images from '../Logo/Image';

const Navbar = () => {
    return ( 
    <nav  nav className = "navbar" >
        {/* <img src={images.AshLogo} alt="" /> */}
        <div className = "navcontents" >
            <a href = "/" > Home </a> 
            <a href = "/Skills" > Skills </a> 
        </div> 
    </nav>
    );
}

export default Navbar;