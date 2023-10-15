import './whyus.css'
import Image2 from '../img-1.png'

function WhyUs() {
    return ( 
        <section id='whyus'>
            <div className="top">
                <h1>Why <span>Us</span></h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores praesentium, tempore repellat distinctio reiciendis voluptatibus hic quos commodi ratione, dolorem nam in vitae sed est.
                </p>
            </div>

            <div className="whyus_container">
                <div className="whyus_img">
                    <img src={Image2}/>
                </div>
                <div className="whyus_text">
                    <div className="why_card">
                        <h3>Save Money</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea recusandae deserunt nesciunt! Repudiandae, distinctio dolorem?
                        </p>
                    </div>
                    <div className="why_card">
                        <h3>Save Time</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea recusandae deserunt nesciunt! Repudiandae, distinctio dolorem?
                        </p>
                    </div>
                    <div className="why_card">
                        <h3>Solutions</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea recusandae deserunt nesciunt! Repudiandae, distinctio dolorem?
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default WhyUs;