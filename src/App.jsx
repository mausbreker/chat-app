import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Landing from './components/Landing';
import Messages from './components/Messages';

function App() {
  const [drone, setDrone] = useState();
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: "",
    color: randomColor()
  });
  const [isLanding, setIsLanding] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const setMemberName = (name) => {
    setMember(prevObject => ({...prevObject, username: name}));
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
  
  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }
  
  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message
    })
  };

  const setUpDrone = () => {
    const drone = new window.Scaledrone("qrpuCOmHNo9hL2Ou", {
      data: member,
    });
    setDrone(drone);
  }

  useEffect(() => {
    if (drone) {
      const room = drone.subscribe("observable-room");
      
      
      drone.on('open', error => {
        if (error) {
          return console.log(error);
        }

        setIsInputDisabled(false);
        setMember({...member, id: drone.clientId});
        
        room.on('data', (data, member) => {
          setMessages((prevArray) => [...prevArray, {member, text: data, timestamp: formatDate(new Date())}])
        });
      });
    }
  }, [drone]);

  return (
    <>
      {
        isLanding ? 
          <Landing 
            setIsLanding={setIsLanding}
            setMemberName={setMemberName}
            setUpDrone={setUpDrone}
          /> :
          <>
            <Header />
            <Messages 
              messages={messages}
              currentMember={member}
            />
            {!isInputDisabled &&
              <Input 
                onSendMessage={onSendMessage}
              />
            }
          </>
      }
    </>
  );
}

export default App;
