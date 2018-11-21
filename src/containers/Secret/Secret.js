import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Secret extends Component {
    render() {
        if (this.props.isAuthenticated === false)
            return (<Redirect to="/login"/>);
        return (
            <div>
                <h1> Okay you found me </h1>
                <img src = 'http://funnyexpo.com/wp-content/uploads/2017/08/Image-10-20.jpg' alt = ''/>
            </div>
        )
    }
}

const mapStateToDefault = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToDefault)(Secret);