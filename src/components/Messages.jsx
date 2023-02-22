const Messages = (props) => {
    const {messages} = props;
    
    const renderMessage = (message) => {
        const {member, text} = message;
        const {currentMember} = props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ?
          "Messages-message currentMember" : "Messages-message";
        return (
          <li className={className} key={Math.random()}>
            <span
              className="avatar"
              style={{backgroundColor: member.color}}
            />
            <div className="Message-content">
              <div className="username">
                {member.username}
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