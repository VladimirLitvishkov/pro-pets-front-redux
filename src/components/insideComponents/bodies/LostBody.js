import React from "react";
import {connect} from "react-redux";
import Post from "../../Post";
import {bindActionCreators} from "redux";
import {requestPosts} from "../../../actions/PostsActions";
import {viewLostsURL} from "../../../constants/urls";

class LostBody extends React.Component{

    componentDidMount() {
        this.props.requestPosts(0,3, viewLostsURL);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.posts.map((p) => <Post key={p.id} post={p}/>)}
                </div>
                <div>
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({requestPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LostBody);