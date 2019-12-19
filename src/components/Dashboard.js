import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'tpconnect',
            toggle: false
        }
    }
    toggle = (e) => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const toggle = (this.state.toggle) ? ' toggled' : ''
        return (
            <div className={"d-flex " + toggle} id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <a href="#!" role="button" tabIndex="0" onClick={this.toggle}>
                            <span className="navbar-toggler-icon"></span>
                        </a>
                        <div className="input-group header-search ">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="TRIP ID/ AGENT REFERENCE" required />
                        </div>

                        <span className="navbar-text login-user">
                            Hi, <span>{this.state.user}</span> <span className="ml-2"> <Link exact="true" to="/"><i className="fas fa-power-off"></i></Link> </span>
                        </span>
                    </nav>

                    <div className="container-fluid">
                        <div className="content mt-3 pb-5">
                            <ul className="nav nav-pills my-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fas fa-book"></i> POS Office</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fas fa-th"></i> Corporate</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


                                    <div className="btn-group btn-group-toggle" id="tab-wrapper" data-toggle="buttons">
                                        <div className="btn tab-type active">
                                            <input type="radio" name="options" id="option1" checked /><i className="fas fa-globe-americas"></i> Office Info
                                        </div>
                                        <div className="btn tab-type">
                                            <input type="radio" name="options" id="option2" /> <i className="fas fa-user"></i> Admin User
                                        </div>
                                        <div className="btn tab-type">
                                            <input type="radio" name="options" id="option3" /> <i className="fas fa-book"></i> Group / Seasonality
                                        </div>
                                        <div className="btn tab-type">
                                            <input type="radio" name="options" id="option3" /> <i className="fas fa-th"></i> Markup
                                        </div>
                                    </div>
                                    <div className="content-inside mt-5">

                                        <h5>Basic Information</h5>
                                        <form>
                                            <div className="form-row mt-3">
                                                <div className="col">
                                                    <label htmlFor="business-type">Business Type *</label>
                                                    <select className="custom-select mr-sm-2" id="business-type">
                                                        <option defaultValue={''}>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="office">Office Name *</label>
                                                    <input type="text" id="office" className="form-control" placeholder="XYZ Travel Agent" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="branch">Branch Code *</label>
                                                    <input type="text" id="branch" className="form-control" placeholder="" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="email">Email ID *</label>
                                                    <input type="email" id="email" className="form-control" placeholder="xyz@abc.om" />
                                                </div>

                                                
                                                <div className="col">
                                                    <label htmlFor="contact">Contact Numner *</label>
                                                    <input type="text" id="contact" className="form-control" placeholder="Contact Numner" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="payment">Payment Gateway *</label>
                                                    <select className="custom-select mr-sm-2" id="payment">
                                                        <option defaultValue={'no'}  value="no">No</option>
                                                        <option value="yes">Yes</option>                                                        
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="currency">Operating Currency *</label>
                                                    <input type="text" id="currency" className="form-control" placeholder="Australian Dollar" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="limit">Credit Limit * <i className="fas fa-info-circle"></i> </label>
                                                    <input type="text" id="limit" className="form-control" placeholder="" />
                                                </div>

                                                <div className="col">
                                                    <label htmlFor="country">Operating Country *</label>
                                                    <input type="text" id="country" className="form-control" placeholder="Australia" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="zone">Operating Zone *</label>
                                                    <input type="text" id="zone" className="form-control" placeholder="Brisbane" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="tax">TAX NUMBER <i className="fas fa-info-circle"></i> </label>
                                                    <input type="text" id="tax" className="form-control" placeholder="" />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="user">Number of Users * <i className="fas fa-info-circle"></i> </label>
                                                    <input type="text" id="user" className="form-control" placeholder="" />
                                                </div>
                                                <div className="col  mb-0">
                                                    <label htmlFor="iata">IATA Number </label>
                                                    <input type="text" id="iata" className="form-control" placeholder="" />
                                                </div>
                                                
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <p>Corporate Tab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard