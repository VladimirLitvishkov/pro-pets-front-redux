import React from "react";
import {connect} from "react-redux";
import LostFoundHeader from "./headers/LostFoundHeader";
import DefaultHeader from "./headers/DefaultHeader";
import InsideActionHeader from "./headers/InsideActionHeader";

class Header extends React.Component {

    render() {
        switch (this.props.state.inside) {
            case 'lost':
            case 'found':
                return <LostFoundHeader/>;
            case 'l_post':
            case 'f_post':
            case 'creat_l_post':
            case 'creat_f_post':
            case 'confirm_l_post':
            case 'confirm_f_post':
            case 'creat_twit':
            case 'twit':
                return <InsideActionHeader/>;
            default:
                return <DefaultHeader/>;
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Header);
