import React from "react";
import {connect} from "react-redux";
import HomeBody from "./bodies/HomeBody";
import FavoritesBody from "./bodies/FavoritesBody";
import ProfileBody from "./bodies/ProfileBody";
import ServiceBody from "./bodies/ServiceBody";
import CreatLFPostTwitBody from "./bodies/CreatLFPostTwitBody";
import ConfirmLFPostBody from "./bodies/ConfirmLFPostBody";
import FoundBody from "./bodies/FoundBody";
import LostBody from "./bodies/LostBody";

class Body extends React.Component {

    render() {
        if (this.props.state.inside === 'lost') {
            return <LostBody/>;
        } else if (this.props.state.inside === 'found') {
            return <FoundBody/>;
        } else if (this.props.state.inside === 'favorites') {
            return <FavoritesBody/>;
        } else if (this.props.state.inside.startsWith('profile')) {
            return <ProfileBody/>;
        } else if (this.props.state.inside.startsWith('service')) {
            return <ServiceBody/>;
        } else if (this.props.state.inside.startsWith('creat')) {
            return <CreatLFPostTwitBody/>;
        } else if (this.props.state.inside.startsWith('confirm')) {
            return <ConfirmLFPostBody/>;
        } else {
            return <HomeBody/>;
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Body);