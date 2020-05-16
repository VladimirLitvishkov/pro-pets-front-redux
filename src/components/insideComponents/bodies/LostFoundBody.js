import React from "react";
import {connect} from "react-redux";
import Post from "../../Post";

class LostFoundBody extends React.Component{

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

export default connect(mapStateToProps)(LostFoundBody);