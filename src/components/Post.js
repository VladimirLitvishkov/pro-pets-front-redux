import React from "react";

class Post extends React.Component{

    render() {
        // return (
        //     <div>
        //         <p>Author: {this.props.post.author}</p>
        //         <p>Type: {this.props.post.type}</p>
        //         <p>Tags: {this.props.post.tags.map((t) => `[${t}] `)}</p>
        //     </div>
        // );
        if (this.props.post.tags){
            return (
                <div>
                    <p>Author: {this.props.post.author}</p>
                    <p>Type: {this.props.post.type}</p>
                    <p>Tags: {this.props.post.tags.map((t) => `[${t}] `)}</p>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default Post;