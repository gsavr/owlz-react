import React, { Component } from 'react';
import API from '../../Utils/API'

export default class dashboard extends Component {

    state = {
        user: {} 
    }
    componentDidMount() {
        const id =this.props.match.params.id
        alert(id);
        API.getUserById(id).then((data)=> {
            console.log(id)
            const user = data.data;
            this.setState({ user });
        });
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.user)}
            </div>
        )
    }
}
