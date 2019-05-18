import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import Message from './Message';



class MessageWindow extends React.Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    //console.log(message)
                    const time = Moment(message.updatedAt).format('LT')
                    return (
                        <Message key={index} username={message.sender.name} text={message.text} time={time}/>

                    )
                })}
            </div>
        )
    }
}

export default MessageWindow