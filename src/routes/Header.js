import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-light bg-light">                    
                <Link className="navbar-brand" to="/" >DIARY2018</Link>
                
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>                
                </button> 
                
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        {this.props.user === null?(
                            <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        ):(
                            <li className="nav-item">
                            <Link className="nav-link" to="/logout" onClick={() => this.props.logout()}>Logout</Link>
                            </li>
                        )}                            
                    </ul>
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

