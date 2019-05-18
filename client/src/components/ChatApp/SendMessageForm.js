import React from 'react'

class SendMessageForm extends React.Component {
    state = {
        message: '',
    }

    typeText = (e) => {
        this.setState({ message: e.target.value })
    }

    onSend = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSend} className="send-message-form">
                <input
                    onChange={this.typeText}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm