import React from "react";
import {connect} from "react-redux";
import Twit from "../../Twit";

class FavoritesBody extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <p>Favorites</p>
                    {/*{this.props.posts.map((p) => <Twit key={p.id} post={p}/>)}*/}
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

export default connect(mapStateToProps)(FavoritesBody);