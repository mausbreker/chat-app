import Message from "./Message";

const Room = () => {
    return (
        <div className="App">
            <header className="room-header">
                <h1>Chat App</h1>
            </header>
            <main>
                <Message />
                <Message />
                <Message />
                <Message />
            </main>
            <footer>
                
            </footer>
        </div>
    );
}
 
export default Room;