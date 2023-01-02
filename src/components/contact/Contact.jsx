import React,{useState} from 'react'
import './contact.css'

const Contact = () => {
    const [message,setMessage]=useState("")
    const handleSubmit =(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, for your message.</span>}
                </form>
            </div>
        </div>
    )
}
export default Contact