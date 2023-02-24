import { useState } from "react";
import '../styles/input.scss';

const Input = (props) => {
    const [input, setInput] = useState("");

    const onChange = (e) => setInput(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        setInput("");
        props.onSendMessage(input);
    }

    return (
        <form className="message-form" onSubmit={e => onSubmit(e)}>
            <input
                className="message-input"
                onChange={e => onChange(e)}
                value={input}
                type="text"
                placeholder="Write a message"
                autoFocus
            />
            <button className="message-submit" type="submit">Send</button>
        </form>
    );
}
 
export default Input;