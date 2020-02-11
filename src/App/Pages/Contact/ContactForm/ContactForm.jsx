import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import {emailCheck} from '../../../common/utilities.js';

const ContactForm = () => {

    // State
    const [emailIsValid, updateEmailIsValid] = useState(true);

    // Refs :: Giving virtual DOM access to the physicalDOM element on the page.
    const emailRef = useRef();
    const messageRef = useRef();


    const handleClick = () => {
        console.log('You clicked me');
    }

    const validateEmail = () => {
        const emailValue = emailRef.current.value;
        console.log ('Validating email', emailValue)

        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid (false);
        }else{
            updateEmailIsValid (true);
        }
        


    }


    return (
        <div className='ContactForm'>
            <div className="form-group">

                <div className="left">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="right">
                    <input 
                    className={emailIsValid ? '':'invalid'}
                    ref={emailRef} 
                    name="email" 
                    id="email" 
                    placeholder='email.somedomain.com' 
                    onChange={validateEmail}/>
                </div>
            </div>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="message">Message</label>
                </div>
                <div className="right">
                    <textarea ref={messageRef} name="message" id="message" placeholder='Your message goes here...' />
                </div>
            </div>
            <div className="form-group">
                <div className="left" />
                <div className="right">
                    <button
                        onClick={handleClick}
                    >Send Email</button>
                </div>
            </div>


        </div>

    );

}
export default ContactForm;