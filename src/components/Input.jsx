import { useState } from "react";

const Input = (props) => {
    const [input, setInput] = useState("");

    const onChange = (e) => setInput(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        setInput("");
        props.onSendMessage(input);
    }

    return (
        <div className="Input">
            <form onSubmit={e => onSubmit(e)}>
                <input
                    onChange={e => onChange(e)}
                    value={input}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                    autoFocus
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
 
export default Input;