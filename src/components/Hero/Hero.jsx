import './hero.css'
import '../../App.css'
import Image2 from '../img-2.png'

function Hero() {
    return ( 
        <div className='hero'>
            <div className="hero_text">
                <h1>Make your <span>Future Better.</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur nisi, provident debitis minima vitae dolores suscipit vero deserunt exercitationem voluptatem totam doloribus quaerat nemo.
                </p>
                <button>Get Started</button>
            </div>
            <div className="img"><img src={Image2} alt="" /></div>
        </div>
     );
}

export default Hero;