import React, { Component } from 'react'
import logo from '../adminLogo.png'
import airplane from '../airplane.svg'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'',
            password:'',
            error:false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user = this.state.user
        const password = this.state.password

        if(user.length > 0 && password.length > 0){
            this.props.history.push("/dashboard")
        }else{
            this.setState({
                error:true
            })
        }
    }
    
    render() {
        let err;
        const error = this.state.error;
        if(error){
            err = <span className="text-danger ml-1"><small>Field Mandatory</small></span>
        }
        
        return (
            <div className="container-fluid">
                <div id="form-wrapper">
                    <div id="form-left">
                        <img src={airplane} alt="Login Left" />
                    </div>
                    <div id="form-right">
                        <form>
                            <img src={logo} alt="Login Logo" />
                            <h4>Sign in</h4>
                            <div className="input-group mb-3 login-input">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="user" className="form-control" placeholder="Username" required onChange={this.handleChange} />
                            </div>
                            <div className="input-group mb-3 login-input">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control" placeholder="Password" required onChange={this.handleChange} />
                            </div>
                            <p><a href="#!" className="forget"><small> Forget Password?</small></a></p>
                            <button type="submit" className="btn btn-login" onClick={this.handleSubmit}>Submit</button>     
                            {err}                       
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login