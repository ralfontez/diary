import React, {Component } from 'react';
import {connect} from 'react-redux';
// with withRouter you can get access to the history object's property
import {withRouter} from 'react-router-dom';
import {getUser} from '../actions/userAction';
import {getNotes} from '../actions/notesAction';

class AuthenticatedComponent extends Component {
    componentDidUpdate(){
        // make sure the loading is done then if no user
        // then push them to login page
        const {userLoading, user} = this.props;
        if(userLoading === false && !user) {
            this.props.history.push('/login')
        }
    }

    render(){
        const {user, userLoading, children} = this.props;
        return userLoading === false && user? <div>{children}</div> : null;
    }
}

function mapStateToProps(state){
    return {
        userLoading: state.loading.user,
        user: state.user        
    };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));
