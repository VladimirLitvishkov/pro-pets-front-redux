import React from "react";

class Twit extends React.Component{

    render() {
        // return (
        //     <div>
        //         <p>Author: {this.props.post.authorId}</p>
        //         <p>Text: {this.props.post.text}</p>
        //         <p>Images: {this.props.post.imagesUrl.map((i) => `[${i}] `)}</p>
        //     </div>
        // );
        if (this.props.post.imagesUrl){
            return (
                <div>
                    <p>Author: {this.props.post.authorId}</p>
                    <p>Text: {this.props.post.text}</p>
                    <p>Images: {this.props.post.imagesUrl.map((i) => `[${i}] `)}</p>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default Twit;