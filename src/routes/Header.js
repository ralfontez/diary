import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid"> 
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>                     
                        </button>

                        <Link className="navbar-brand" to="/" >DIARY2018</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            {this.props.user === null?(
                                <li>
                                <Link to="/Login">Login</Link>
                                </li>
                            ):(
                                <li>
                                <Link to="/logout" onClick={() => this.props.logout()}>Logout</Link>
                                </li>
                            )}                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, {getUser, logout})(Header);
