import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStateInside, changeStateOutside} from "../../actions/StateActions";
import {requestPosts} from "../../actions/PostsActions";

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <div className='float-right'>
                    <div>
                        <button onClick={() => {
                            this.props.changeStateInside('home');
                        }}>Home</button>
                    </div>

                    <div>
                        <button onClick={() => {
                            this.props.changeStateInside('lost');
                        }}>Lost</button>
                    </div>

                    <div>
                        <button onClick={() => {
                            this.props.changeStateInside('found');
                        }}>Found</button>
                    </div>

                    <div className='dropdown'>
                        <button className='dropdown-toggle' data-toggle='dropdown'>Services</button>
                        <div className="dropdown-menu">
                            <button onClick={() => this.props.changeStateInside('service_hotels')}
                                    className='dropdown-item'>Hotels
                            </button>
                            <button onClick={() => this.props.changeStateInside('service_walking')}
                                    className='dropdown-item'>Walking
                            </button>
                            <button onClick={() => this.props.changeStateInside('service_fostering')}
                                    className='dropdown-item'>Fostering
                            </button>
                            <button onClick={() => this.props.changeStateInside('service_vet_help')}
                                    className='dropdown-item'>VetHelp
                            </button>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => this.props.changeStateInside('favorites')}>Favorites
                        </button>
                    </div>

                    <div>
                        <button onClick={() => this.props.changeStateInside('profile_info')}>
                            <img className='w-25' src={this.props.user.avatar} alt="avatar"/> Profile
                        </button>
                    </div>

                    <div>
                        <button onClick={() => {
                            localStorage.removeItem('Authorization');
                            this.props.changeStateOutside('intro');
                            this.props.changeStateInside('home');
                        }}>Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeStateOutside, changeStateInside, requestPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);