import React, { Component } from 'react'
import logo from '../adminLogo.png'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <div className="side-content">
                    <div className="sidebar-heading"><img src={logo} alt="Logo" /> </div>
                    <div className="list-group list-group-flush">
                        <Link exact="true" to="/dashboard" className="list-group-item list-group-item-action"><i className="fas fa-home"></i> Dashboard</Link>
                        <Link to="/dashboard" className="list-group-item list-group-item-action"><i className="fas fa-globe-americas"></i> Point of Sale Management</Link>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-user"></i> User Role Management</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-globe-americas"></i> Setup / Configuration</a>
                        <Link to="/search" className="list-group-item list-group-item-action"><i className="fas fa-search"></i> Search</Link>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-globe-americas"></i> Corporates</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="far fa-file-powerpoint"></i> Preset Package</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-calendar-alt"></i> Bookings</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-bookmark"></i> Accounts</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-book"></i> Reports</a>
                        <a href="#!" className="list-group-item list-group-item-action"><i className="fas fa-question-circle"></i> Help</a>
                    </div>
                </div>
                <div className="side-footer">
                    Powered by TPConnects 1.7.9
                    </div>
            </div>
        )
    }
}
export default Sidebar