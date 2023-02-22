import '../styles/landing.scss';

const Landing = () => {
    return (
        <div className="App">
            <h1>Chat App</h1>
            <div className="landing-msg">
                Enter your name and choose an avatar
            </div>
            <form className='landing-form'>
                <input className='input-form' type="text" placeholder='Your name'/>
                <div className="avatar-wrap">
                    <img src="" className='avatar' alt="" />
                    <img src="" className='avatar' alt="" />
                    <img src="" className='avatar' alt="" />
                </div>
                <button className='form-button' type='submit'>Submit</button>
            </form>
        </div>
    );
}
 
export default Landing;