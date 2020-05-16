import React from "react";
import {connect} from "react-redux";
import Twit from "../../Twit";
import {bindActionCreators} from "redux";
import {requestPosts} from "../../../actions/PostsActions";
import {viewTwitsURL} from "../../../constants/urls";

class HomeBody extends React.Component{

    componentDidMount() {
        this.props.requestPosts(0, 3, viewTwitsURL);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.posts.map((p) => <Twit key={p.id} post={p}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);