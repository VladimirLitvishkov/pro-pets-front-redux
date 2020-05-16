import React from "react";
import {connect} from "react-redux";
import Post from "../../Post";
import User from "../../User";

class ProfileBody extends React.Component {

    render() {
        switch (this.props.state.inside) {
            case 'profile_activ':
                return (
                    <div>
                        <div className='row'>
                            <button className='col-6'>My profile</button>
                            <button className='col-6'>Activities</button>
                        </div>
                        {this.props.posts.map((p) => <Post post={p}/>)}
                    </div>
                );
            default:
                return (
                    <div>
                        <div className='row'>
                            <button className='col-6'>My profile</button>
                            <button className='col-6'>Activities</button>
                        </div>
                        <User/>
                    </div>
                );
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(ProfileBody);