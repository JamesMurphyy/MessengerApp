import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";

const apiKey = '95hhu653yz2d';

const client = StreamChat.getInstance(apiKey)

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'> 
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
};

export default App;
