import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../../Utils/API';
import './dashboard.css';



class EditPromoter extends Component {
    state = {
        promoterId: this.props.promoterData.id,
        last_name: this.props.promoterData.last_name,
        first_name: this.props.promoterData.first_name,
        password: this.props.promoterData.password,
        email: this.props.promoterData.email,
        phone: this.props.promoterData.phone,
        handle: this.props.promoterData.handle,
        instagram: this.props.promoterData.instagram,
        city: this.props.promoterData.city,
        languages: this.props.promoterData.languages,
        descriptions: this.props.promoterData.descriptions,
        profile_pic: this.props.promoterData.profile_pic,
        waitingForServer: false,
        picOk: false
    }

    edit = () => {
        event.preventDefault();
        const { promoterId, last_name, first_name, email, password, phone, profile_pic, handle, instagram, city, languages, descriptions } = this.state;
        const registerBody = { id: promoterId, first_name, last_name, email, password, phone, profile_pic, handle, instagram, city, languages, descriptions };
        console.log(`this is my register body`);
        console.log(registerBody)
        this.setState({ waitingForServer: true }, () => {
            API.Updatepromoter(promoterId, registerBody)
                .then((data) => {
                    console.log("------ API -------")
                    console.log(`this is my data response`);
                    console.log(data);
                    this.props.onUpdate({ ...this.props.promoterData, ...registerBody });
                })
        })
    }

    handleType = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    showWidget = () => {
        event.preventDefault();
        window.cloudinary.openUploadWidget({
            cloudName: "gsafl",
            uploadPreset: "m48qyart",
            sources: ['local', 'url', 'instagram']
        },
            (error, result) => {
                if (result.event === "success") { //if (result && result.event === "success")
                    this.setState({ picOk: true })
                    this.state.profile_pic = result.info.url
                };
            }
        )
    }

    render() {

        return (
            <div>
                <form className="form-log-promoter slideUp">
                    <h1 className="text-center">Edit {this.props.promoterData.first_name} {this.props.promoterData.last_name}</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder={this.props.promoterData.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder={this.props.promoterData.password} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">First Name</label>
                        <input onChange={this.handleType} name="first_name" type="text" className="form-control" id="InputFirstName" placeholder={this.props.promoterData.first_name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Last Name</label>
                        <input onChange={this.handleType} name="last_name" type="text" className="form-control" id="InputFirstLast" placeholder={this.props.promoterData.last_name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Phone</label>
                        <input onChange={this.handleType} name="phone" type="text" className="form-control" id="InputPhone" placeholder={this.props.promoterData.phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Handle</label>
                        <input disabled={this.state.waitingForServer} onChange={this.handleType} name="handle" type="text" className="form-control" id="InputHandle" placeholder={this.props.promoterData.handle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">About me</label>
                        <textarea disabled={this.state.waitingForServer} onChange={this.handleType} name="descriptions" type="text" className="form-control" id="InputDescription" placeholder={this.props.promoterData.descriptions} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">City</label>
                        <input disabled={this.state.waitingForServer} onChange={this.handleType} name="city" type="text" className="form-control" id="InputCity" placeholder={this.props.promoterData.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Instagram</label>
                        <input disabled={this.state.waitingForServer} onChange={this.handleType} name="instagram" type="text" className="form-control" id="Inputinstagram" placeholder={this.props.promoterData.instagram} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Language</label>
                        <select disabled={this.state.waitingForServer} onChange={this.handleType} name="languages" type="text" className="form-control" id="InputLanguage">
                            <option value={this.props.promoterData.languages} default>Your Language</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Spanish">French</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Image</label><br></br>
                        <button onClick={this.showWidget} className="btn-login">{this.state.picOk && <i className="far fa-check-square"></i>} Upload Picture <i className="fas fa-image"></i></button>
                    </div>
                    <button onClick={this.edit} type="submit" className="btn-login">Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditPromoter);
