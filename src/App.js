
import React, { useEffect, useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages , setMessages]=useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  },[]);

  useEffect(()=>{
    //once
    const pusher = new Pusher('01be9c1ed4d63665bf03', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  } ,[ messages]);

  console.log(messages);

  return (
    <div className="App">

        <div className="app__body">
              <Sidebar />
              <Chat messages={messages} />

        </div>


    </div>
  );
}

export default App;
