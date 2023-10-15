import './Form.css'
import '../../App.css'

function Form() {
    return ( 
        <section className="form">
             <div className="form_container">
                <div className="top">
                    <h1>Lets's Work Together</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde libero accusantium commodi velit, non iste autem recusandae ex vitae.
                    </p>
                </div>

                <form>
                    <input type="Email" placeholder='Email' required />
                    <textarea placeholder='Your Message' required></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
     );
}

export default Form;