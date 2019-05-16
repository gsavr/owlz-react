import React from 'react'

class MessageList extends React.Component {
    render() {
        //console.log(`room list: ${this.props.rooms}`)

        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        return (

            <div className="rooms-list">
                <ul>
                    <h6>Messages:</h6>
                    {orderedRooms.map(room => {
                        //console.log(room.id) //works
                        const roomId = room.id
                        //console.log(`roomId from MessageList ${roomId}`) //works
                        const active = this.props.roomId === roomId ? "active" : "";
                        return (
                            <li key={roomId} className={`room ${active}`}>
                                <a onClick={() => this.props.subscribeToChat(roomId)} id={roomId} href="javascript:;">{room.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MessageList