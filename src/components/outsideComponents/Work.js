import React from "react";
import Header from "../insideComponents/Header";
import Navigation from "../insideComponents/Navigation";
import Body from "../insideComponents/Body";
import Assist from "../insideComponents/Assist";

class Work extends React.Component{

    render() {
        return (
            <div>
                <div className='bg-secondary'><Header/></div>
                <div className='row'>
                    <div className='col-3 bg-dark'><Navigation/></div>
                    <div className='col-6 bg-primary'><Body/></div>
                    <div className='col-3 bg-info'><Assist/></div>
                </div>
            </div>
        );
    }
}

export default Work;