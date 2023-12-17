import './Navbar.css';
import images from '../../Logo/Image';

const Navbar = () => {
    return ( 
    <div className = "navbar" >
        <div className = "navcontents" >
            <a href = "/" > Home </a> 
            <a href = "/Skills" > Skills </a> 
        </div> 
    </div>
    );
}

export default Navbar;