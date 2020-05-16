import React from 'react';
import Intro from "./components/outsideComponents/Intro";
import Work from "./components/outsideComponents/Work";
import Registration from "./components/outsideComponents/Registration";
import Login from "./components/outsideComponents/Login";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        switch (this.props.state.outside) {
            case 'login':
                return <Login/>;
            case 'reg':
                return <Registration/>;
            case 'work':
                return <Work/>;
            default:
                return <Intro/>;
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
