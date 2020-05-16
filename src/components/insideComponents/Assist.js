import React from "react";
import {connect} from "react-redux";
import PreviewAssist from "./assists/PreviewAssist";
import MapAssist from "./assists/MapAssist";

class Assist extends React.Component {

    render() {
        switch (this.props.state.inside) {
            case 'lost':
            case 'found':
                return <MapAssist/>;
            default:
                return <PreviewAssist/>;
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Assist);