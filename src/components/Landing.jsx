import '../styles/landing.scss';
import Header from './Header';

const Landing = ({setMemberName, setUpDrone, setIsLanding}) => {
    const handleSubmit = () => {
        setUpDrone();
        setIsLanding(false);
    }

    return (
        <>
            <Header />
            <div className="landing">
                <div className="landing-msg">
                    Enter your name and choose an avatar
                </div>
                <form className='landing-form' onSubmit={handleSubmit}>
                    <input className='input-form' type="text" placeholder='Your name' onChange={(e) => setMemberName(e.target.value)}/>
                    <button className='form-button' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}
 
export default Landing;