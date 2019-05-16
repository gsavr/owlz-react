import React from 'react';

class ShowHide extends React.Component {

    showHide = () => {
        const hide  = this.props.hide ? false:true
        //console.log(`hide is ${hide}`)
        this.props.showHide(hide)
            
    }


    render() {
        //console.log(`hidden prop in showhide component: ${this.props.hide}`) //works
        return (
            <div className={`show-hide ${this.props.hide ? 'show' : 'hide'}`} onClick={this.showHide}><a href='#'>{this.props.hide ? 'Show Chats' : 'Hide Chats'}</a></div>
        )
    }
}

export default ShowHide