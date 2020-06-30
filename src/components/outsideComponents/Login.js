import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {login} from "../../actions/AccountActions";
import {changeStateOutside} from "../../actions/StateActions";
import {loginURL} from "../../constants/urls";

class Login extends React.Component{

    submitHandler = (e) => {
        e.preventDefault();
        let auth = 'Basic ' + window.btoa(`${e.target.login.value}:${e.target.pass.value}`);
        // let auth = 'Basic ' + window.btoa(e.target.login.value) + ':' + window.btoa(e.target.pass.value);
        this.props.login(loginURL, auth);
    };

    render() {
        return (
            <div>
                <div>
                    <p>Title</p>
                    <p>Something</p>
                    <button onClick={() => this.props.changeStateOutside('reg')}>Registration</button>
                </div>
                <div>
                    <form onSubmit={this.submitHandler}>
                    <p className='text-center'>
                        <label htmlFor="">Account:
                            <input name='login' type="text"/>
                        </label>
                    </p>
                    <p className='text-center'>
                        <label htmlFor="">Password:
                            <input name='pass' type="password"/>
                        </label>
                    </p>
                    <div className='row justify-content-between'>
                        <button className='col-3'
                                onClick={() => this.props.changeStateOutside('intro')}>Cancel</button>
                        <input className='col-3' type="submit" value='Send'/>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login, changeStateOutside}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);