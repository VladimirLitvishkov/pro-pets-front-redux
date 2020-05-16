import React from "react";
import introDog from "../../images/IntroDog.png"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStateOutside} from "../../actions/StateActions";

class Intro extends React.Component {

    render() {
        return (
            <div>
                <div className='row justify-content-between'>
                    <p className='col-3'>ProPets</p>
                    <button className='col-3'
                            onClick={() => this.props.changeStateOutside('login')}>Sign in
                    </button>
                </div>
                <div className='row align-items-center '>
                    <div className='col-6'>
                        <p className='text-center'>text</p>
                        <p>buttonLost</p>
                        <p>buttonFound</p>
                    </div>
                    <img className='col-6' src={introDog} alt="dog"/>
                </div>
                <div>
                    Footer
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeStateOutside}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);