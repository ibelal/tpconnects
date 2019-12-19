import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'tpconnect',
            departureDate: '',
            returnDate: '',
            toggle: false
        }
    }
    toggle = (e) => {
        this.setState({ toggle: !this.state.toggle })
    }
    handleDepartureChange = date => {
        this.setState({
            departureDate: date
        });
    };
    handleReturnChange = date => {
        this.setState({
            returnDate: date
        });
    };
    render() {
        const toggle = (this.state.toggle) ? ' toggled' : ''
        const options = [];
        for (let i = 0; i <= 10; i++) { options.push(i); }
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
                        <div className="content mt-3 pt-4 pb-5">
                            <h4>Flight Search</h4>

                            <div className="content-inside mt-2">
                                <button type="button" className="btn btn-flight"> <i className="fas fa-plane"></i> FLIGHTS</button>
                                <form>
                                    <div className="booking-type mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="onway" name="bookingtype" />
                                            <label className="custom-control-label" htmlFor="onway">Oneway</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="roundtrip" name="bookingtype" />
                                            <label className="custom-control-label" htmlFor="roundtrip">Round Trip</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="mulitple" name="bookingtype" />
                                            <label className="custom-control-label" htmlFor="mulitple">Multiple Destinations</label>
                                        </div>
                                    </div>

                                    <div className="form-row-gird mt-4">
                                        <div className="col">
                                            <label htmlFor="departure">Departure Airport</label>
                                            <input type="text" id="departure" className="form-control" placeholder="" />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="arrival">Arrival Airport</label>
                                            <input type="text" id="arrival" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="ddate">Departure Date</label>                                            
                                            <DatePicker
                                                selected={this.state.departureDate}
                                                onChange={this.handleDepartureChange}
                                                minDate={new Date()}
                                            />
                                            
                                        </div>
                                        <div className="col">
                                            <label htmlFor="rdate">Return Date</label>
                                            <DatePicker
                                                selected={this.state.returnDate}
                                                onChange={this.handleReturnChange}
                                                minDate={new Date()}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row-gird2 mt-3">
                                        <div className="col">
                                            <label htmlFor="adult">Adult</label>
                                            <select className="custom-select mr-sm-2" id="adult">
                                                {options.map(option => (
                                                    <option key={option + 1} value={option + 1}> {option + 1}  </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="child">Child (2-12 yrs)</label>
                                            <select className="custom-select mr-sm-2" id="child">
                                                {options.map(option => (
                                                    <option key={option} value={option}> {option}  </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="infant">Infant (Below 2 yrs)</label>
                                            <select className="custom-select mr-sm-2" id="infant">
                                                {options.map(option => (
                                                    <option key={option} value={option}> {option}  </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="class">Preferred Class</label>
                                            <select className="custom-select mr-sm-2" id="class">
                                                <option value="1">Economy/Coach</option>
                                                <option value="2">Business</option>
                                                <option value="3">First</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row-gird3 mt-3">
                                        <div className="col mb-2">
                                            <label htmlFor="pairline">Preferred Airline</label>
                                            <input type="text" id="pairline" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col  mb-2">
                                            <label htmlFor="markup">Markup Value</label>
                                            <input type="text" id="markup" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col  mb-2">
                                            <label htmlFor="class">Markup By</label>
                                            <select className="custom-select mr-sm-2" id="class">

                                                <option value="">Chose Markup</option>
                                                <option value="1">Economy/Coach</option>
                                                <option value="2">Business</option>
                                                <option value="3">First</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="nonstop" />
                                        <label className="form-check-label" htmlFor="nonstop">
                                            Non stop
                                        </label>
                                    </div>
                                    <button type="button" className="btn btn-flight"> <i className="fas fa-search"></i> SEARCH YOUR FLIGHTS</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search