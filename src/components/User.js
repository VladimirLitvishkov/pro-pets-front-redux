import React from "react";
import {connect} from "react-redux";

class User extends React.Component{

    render() {
        return (
            <div>
                <img src={this.props.user.avatar} alt=""/>
                <p>Name: {this.props.user.name}</p>
                <p>Email: {this.props.user.login}</p>
                <p>Phone: {this.props.user.phone}</p>
                <p>Roles: {this.props.user.roles.map((r) => `[${r}]`)}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(User);