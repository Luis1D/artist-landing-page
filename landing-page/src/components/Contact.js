import React, { useState } from 'react';

const Contact = () => {
    const [contactBtn, setContactBtn] = useState(false);

    const handleClick = () => {
        setContactBtn(!contactBtn);
    };

    const handleSubmit = () => {
        setContactBtn(!contactBtn);
    }

    return (
        <div className="Contact">
            <button className="contact-btn" onClick={ handleClick }>
                {
                    contactBtn ? 
                    <span>X</span> 
                    :
                    <img
                        src={ require('../assets/mail.svg') }
                        alt="mail"
                    />

                }
            </button>
            {contactBtn ?
                <div className="contact-pop-up">
                    <h1>Contact</h1>
                    <form>
                        <div className="wrapper">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="wrapper">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="name"
                            />
                        </div>
                        <div className="wrapper">
                            <label>Your Message</label>
                            <input
                                type="textarea"
                                placeholder="Message"
                            />
                        </div>
                        <button className="submit" onSubmit={ handleSubmit }>SUBMIT</button>
                    </form>
                </div>
                : null
            }
        </div>
    )
}

export default Contact;