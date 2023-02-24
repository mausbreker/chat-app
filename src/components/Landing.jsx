import { useState } from 'react';
import '../styles/landing.scss';
import Header from './Header';

const Landing = (props) => {
    return (
        <>
            <Header />
            <div className="landing">
                <div className="landing-msg">
                    Enter your name and choose an avatar
                </div>
                <form className='landing-form'>
                    <input className='input-form' type="text" placeholder='Your name' onChange={(e) => props.setMemberName(e.target.value)}/>
                    <div className="avatar-wrap">
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                    </div>
                    <button className='form-button' type='submit' onClick={() => {
                        props.setUpDrone()
                        props.setIsLanding(false)
                    } }>Submit</button>
                </form>
            </div>
        </>
    );
}
 
export default Landing;