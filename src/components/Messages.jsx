import '../styles/messages.scss';

const Messages = (props) => {
    const {messages} = props;
    console.log(messages);
    
    const renderMessage = (message) => {
        const {member, text, timestamp} = message;
        const {currentMember} = props;
        const messageFromMe = member?.id === currentMember?.id;
        const className = messageFromMe ?
          "Messages-message currentMember" : "Messages-message";

        return (
          <li className={className} key={Math.random()}>
            <span
              className="avatar"
              style={{backgroundColor: member?.clientData.color}}
            />
            <div className="Message-content">
              <div className="username">
                {member.clientData.username}
              </div>
              <div className='username'>
                {timestamp}
              </div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      }

    return (
      <ul className="Messages-list">
        {messages.map(m => renderMessage(m))}
      </ul>
    );
}
 
export default Messages;