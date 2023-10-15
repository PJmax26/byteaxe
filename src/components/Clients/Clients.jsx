import './Clients.css'
import '../../App.css'
import Person1 from '../person-1.jpg'
import Person2 from '../person-2.jpg'
import Person3 from '../person-3.jpg'

function Clients() {
    return ( 
        <section className="clients" id="clints">
             <h1>What Our <span>Clients Say</span></h1>

             <div className="people_line">

                <div className="person">
                    <img src={Person1} alt="" />
                    <div className="text">
                        <h5>Dori, CEO - DoriCodes</h5>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium, molestiae doloribus vero minus iure rem architecto similique id porro.
                        </p>
                    </div>
                </div>

                <div className="person">
                    <img src={Person2} alt="" />
                    <div className="text">
                        <h5>Ayla, CEO - McCoy Studio Hair</h5>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium, molestiae doloribus vero minus iure rem architecto similique id porro.
                        </p>
                    </div>
                </div>

                <div className="person">
                    <img src={Person3} alt="" />
                    <div className="text">
                        <h5>James, CEO - DoriNet</h5>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium, molestiae doloribus vero minus iure rem architecto similique id porro.
                        </p>
                    </div>
                </div>

             </div>

        </section>
     );
}

export default Clients;