import React from "react";
import {bindActionCreators} from "redux";
import {changeStateInside} from "../../../actions/StateActions";
import {connect} from "react-redux";

class LostFoundHeader extends React.Component{

    render() {
        return (
            <div className='clearfix'>
                <p className='float-left'>Lost and found</p>
                <button onClick={() => this.props.changeStateInside('creat_l_post')}
                        className='float-right'>I lost pet</button>
                <button onClick={() => this.props.changeStateInside('creat_f_post')}
                        className='float-right'>I found pet</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LostFoundHeader);