import React from 'react'

class NewMessageForm extends React.Component {

    state = {
        chatName: '',
    }

    typeText = (e) => {
        this.setState({
            roomName: e.target.value
        })
    }

    onEnter = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <div className="new-room-form">
                <form onSubmit={this.onEnter}>
                    <input
                        onChange={this.typeText}
                        type="text"
                        placeholder="NewChat"
                        required />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default NewMessageForm