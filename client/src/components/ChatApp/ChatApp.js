import './chatApp.css'
import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageWindow from './MessageWindow'
import SendMessageForm from './SendMessageForm'
import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'

class ChatApp extends React.Component {
    state = {
        messages:[]
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:22ea8e99-d0c0-4562-b5e8-847a27eaa8e2',
            userId: '2',
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/22ea8e99-d0c0-4562-b5e8-847a27eaa8e2/token'
            })
        })
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: '19421947',
                hooks: {
                    onMessage: message => {
                        console.log('message.text: ', message.text);
                        this.setState({
                            messages: [...this.state.messages, message]
                        });
                    }
                }
            })
        })
    }

    sendMessage = (text) => {
        this.currentUser.sendMessage({
            text: text,
            roomId: '19421947',
        })
    }

    render() {
        console.log(` messages: ${this.state.messages}`)
        return (
            <div className="app">
                <MessageList />
                <MessageWindow messages={this.state.messages}/>
                <SendMessageForm sendMessage={this.sendMessage}/>
                <NewMessageForm />
            </div>
        );
    }
}

export default ChatApp