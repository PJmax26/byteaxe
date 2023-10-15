import './navbar.css'
import '../../App.css'

function Navbar() {
    return ( 
        <header>
            <div className="menuBtn">&#9776;</div>
            <div className="logo">Byteaxe</div>
            <nav>
            <ul className="nav_links">
                <li><a href="#services">Services</a></li>
                <li><a href="#whyus">Why Us</a></li>
                <li><a href="">Leadership</a></li>
            </ul>
            <button>Contact Us</button>
            </nav>
        </header>
     );
}

export default Navbar;