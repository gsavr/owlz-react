import './chatApp.css'
import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageWindow from './MessageWindow'
import SendMessageForm from './SendMessageForm'
import MessageList from './MessageList'
import ShowHide from './ShowHide'
//import NewMessageForm from './NewMessageForm'

class ChatApp extends React.Component {
    state = {
        roomId: null,
        messages: [],
        joinableRooms: [],
        joinedRooms: [],
        hide: true,
        chat: {},
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:22ea8e99-d0c0-4562-b5e8-847a27eaa8e2',
            userId: this.props.emailPromoter || this.props.emailUser || 'Not Connected',
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/22ea8e99-d0c0-4562-b5e8-847a27eaa8e2/token'
            })
        })
        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser;
                this.getChats();
            }).catch(err => console.log('error on connecting: ', err))
    }

    componentDidUpdate() {
        if (this.props.chat.emailUser) {
            this.setState({ chat: this.props.chat })
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.currentUser) {
            if (this.state.joinedRooms.filter(room => room.name === `${newProps.chat.userName} & ${newProps.chat.promoterName}`).length === 0) {
                this.currentUser.createRoom({
                    name: `${newProps.chat.userName} & ${newProps.chat.promoterName}`,
                    private: true,
                    addUserIds: [newProps.chat.promoterEmail, newProps.chat.userEmail],
                })
                    .then(room => this.subscribeToChat(room.id)) // may not need this
                    .catch(err => console.log('error with createRoom: ', err));
                    this.setState({hide:false})
            }
            else{this.setState({hide:false})}
        }    
    }

    getChats = () => {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms: joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            }).catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToChat = (roomId) => { //ROOM ID COMING THROUGH FROM MESSAGELIST
        this.setState({ messages: [] });
        //console.log(`room id in subscribeToChat (App.js): ${roomId}`) //works
        this.currentUser.subscribeToRoom({
            roomId: roomId /* this.currentUser.rooms[0].id */,
            hooks: {
                onMessage: message => {
                    console.log(`subscribed successfully`)
                    //console.log('message.text: ', message.text);
                    this.setState({
                        messages: [...this.state.messages, message]
                    });
                }
            }
        }).then(room => {
            this.setState({
                roomId: room.id
            })
            this.getChats()
        }).catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage = (text) => {
        this.currentUser.sendMessage({
            text: text,
            roomId: this.state.roomId/* this.currentUser.rooms[0].id */,
        })
    }

    showHide = (hide) => {
        this.setState({
            hide: hide
        })
    }

    activeChat = () => {

        return (
            <div className="app">
                <MessageList
                    roomId={this.state.roomId}
                    subscribeToChat={this.subscribeToChat}
                    rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]} />
                <MessageWindow messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage} />
                {/* <NewMessageForm /> */}
                <ShowHide hide={this.state.hide} showHide={this.showHide} />
            </div>
        )
    }

    hiddenChat = () => {
        return (
            <div className="app-hidden">
                <ShowHide hide={this.state.hide} showHide={this.showHide} />
            </div>
        )
    }


    render() {
        return (
            <div>
                {!this.state.hide ? this.activeChat() : this.hiddenChat()}
            </div>
        );
    }
}

export default ChatApp