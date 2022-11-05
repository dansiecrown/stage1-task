import React from 'react';
import './contact.css'

export default function Contact() {
    const [agree, setAgree] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [msgClass, setMsgClass] = React.useState('');
    const [showClass, setShowClass] = React.useState('hideErr');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (msg === "") {

            setMsgClass('err')
            setShowClass('showErr')
        } else {
            setMsgClass("")
            setShowClass('hideErr')
        }
    }

    const handleChange = () => {
        setAgree(!agree);

    }

    const hasMsg = (e) => {
        setMsg(e.target.value)
    }

    return (
        <div>

            <div className='contact'>
                <div className='form-container'>
                    <div className='head'>
                        <h1>Contact Me</h1>
                        <p>Hi there, contact me to aske me about anything you have in mind.</p>
                    </div>
                    <form >
                        <div className='form-group'>
                            <div>
                                <label htmlFor='fname'>First name</label>
                                <input type='text' id='first_name' name='fname' placeholder='Enter your first name' />
                            </div>
                            <div>
                                <label htmlFor='lname'>Last name</label>
                                <input type='text' id='last_name' name='lname' placeholder='Enter your last name' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className="row">
                                <label htmlFor='email'>Email</label>
                                <input type='text' id='email' name='email' placeholder='yourname@email.com' />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className="row">
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' name='message' onChange={(e) => hasMsg(e)} placeholder="Send me a message and I'll reply you as soon as possible." rows='5' className={msgClass} />
                                <p className={showClass}>Please enter a message.</p>
                            </div>
                        </div>
                        <div className='checkbox-group'>
                            <input type='checkbox' id='agree' name='agree' onChange={() => handleChange()} />
                            <label>You agree to providing your data to Daniel who may contact you.</label>
                        </div>
                        <div className='form-group'>
                            <button id='btn__submit' disabled={agree ? false : true} onClick={(e) => handleSubmit(e)}>Send message</button>
                        </div>
                    </form>
                </div>
            </div >

            <div className='footer'>
                <div className="separator">
                    <hr />
                </div>
                <div className="footer2">
                    <img src="./assets/zuri.png" alt="zuri" className='zuri' />
                    <p>HNG Internship 9 Frontend Task</p>
                    <img src="./assets/I4G.png" alt="ingressive" className='ingressive' />
                </div>
            </div>
        </div >
    )
}
