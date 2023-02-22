import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Landing from './components/Landing';
import Messages from './components/Messages';
import Room from './components/Room';

function App() {
  const [drone, setDrone] = useState();
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor()
  });
  
  function randomName() {
      const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
      const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  const onSendMessage = (message) => {
    // setMessages(prevArray => [...prevArray, {member, text: message}]);
    drone.publish({
      room: "observable-room",
      message
    })
  };

  useEffect(() => {
    // console.log(messages);
  }, [messages]);

  useEffect(() => {
    const drone = new window.Scaledrone("qrpuCOmHNo9hL2Ou", {
      data: member,
    });
    setDrone(drone);
  }, [])

  useEffect(() => {
    if (drone) {
      const room = drone.subscribe("observable-room");

      drone.on('open', error => {
        if (error) {
          return console.log(error);
        }

        setMember({...member, id: drone.clientId});

        room.on('data', (data, member) => {
          console.log(data, member);
          setMessages((prevArray) => [...prevArray, {member, text: data}])
        });
      });
    }
  }, [drone]);

  return (
    <>
      <Messages 
        messages={messages}
        currentMember={member}
      />
      <Input 
        onSendMessage={onSendMessage}
      />
    </>
  );
}

export default App;
