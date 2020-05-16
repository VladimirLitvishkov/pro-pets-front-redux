import React from "react";
import {bindActionCreators} from "redux";
import {changeStateInside} from "../../../actions/StateActions";
import {connect} from "react-redux";

class DefaultHeader extends React.Component{

    render() {
        return (
            <div className='clearfix'>
                <p className='float-left'>Default state</p>
                <button onClick={() => this.props.changeStateInside('creat_twit')}
                        className='float-right'>Add new+</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeStateInside}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);