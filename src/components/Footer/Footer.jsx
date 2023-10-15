import './Footer.css'
import '../../App.css'

function Footer() {
    return ( 
        <section className="footer">
            <div className="text">
                <h1>byte<span>ax</span>e</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos possimus atque quos in quod eligendi nulla impedit sunt facere.
                </p>
            </div>

            <div className="links">
                <div>
                    <h5>Services</h5>
                    <li>CTO For Hire</li>
                    <li>Digital Transformation</li>
                    <li>Software Development</li>
                    <li>User Experience Design</li>
                </div>
                <div>
                    <h5>Company</h5>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Jobs</li>
                </div>
                <div>
                    <h5>Our Address</h5>
                    <li>Address Line, Location</li>
                    <li>Callifonia, USA</li>
                </div>
            </div>
        </section>
     );
}

export default Footer;