import React from 'react'
import './Form.css'
import message from '../../assets/mail_icon.svg'
import phone from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'


export default function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dd48860e-b3af-4ef5-b3dc-8ad93c545f95");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='form-container'>
            <h1>Get in touch</h1>

            <div className="form">
                <div className="left-side">
                    <h1>Let's talk</h1>
                    <p>I am currentky available to take on new projects, so feel free to send me a message about anything
                        that you want to make work on. You can contact anytime
                    </p>

                    <div className="data">

                        <div className="data-pattern">
                            <img src={message} alt="" />
                            <p>example@gmail.com</p>
                        </div>

                        <div className="data-pattern">
                            <img src={phone} alt="" />
                            <p>0619-965635</p>
                        </div>

                        <div className="data-pattern">
                            <img src={location} alt="" />
                            <p>CA, United States</p>
                        </div>

                    </div>
                </div>


                <form onSubmit={onSubmit} action="">
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" placeholder='Enter your name' />

                    <label htmlFor=""></label>
                    <input type="email" placeholder='Enter your email' />

                    <label htmlFor=""></label>
                    <textarea placeholder='Enter your message' name="" id="" cols="30" rows="10"></textarea>

                    <button>Submit now</button>
                    <span>{result}</span>
                    
                </form>

            </div>

        </div>
    )
}
