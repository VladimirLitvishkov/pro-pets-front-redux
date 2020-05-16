import React from "react";
import {bindActionCreators} from "redux";
import {registration} from "../../actions/AccountActions";
import {connect} from "react-redux";
// import {changeAvatar} from "../../actions/UserActions";
import {changeStateOutside} from "../../actions/StateActions";
import {registrationURL} from "../../constants/urls";

class Registration extends React.Component {

    submitHandler = (e) => {
        e.preventDefault();
        if (e.target.pass.value === e.target.checkPass.value) {
            let dto = {
                name: `${e.target.fName.value} ${e.target.lName.value}`,
                email: e.target.login.value,
                password: e.target.pass.value
            };
            this.props.registration(registrationURL, dto);
        } else {
            alert('Confirm your password');
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    {/*<img onClick={() => {*/}
                    {/*    let url = prompt('Enter avatar url: ');*/}
                    {/*    this.props.changeAvatar(url);*/}
                    {/*}}*/}
                    name='avatar' src={this.props.user.avatar} alt=""/>
                    <p>
                        <label>First Name:
                            <input name='fName' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Last Name:
                            <input name='lName' type="text"/>
                        </label>
                    </p>
                    {/*<p>*/}
                    {/*    <label>Phone:*/}
                    {/*        <input name='phone' type="text"/>*/}
                    {/*    </label>*/}
                    {/*</p>*/}
                    <p>
                        <label>Email:
                            <input name='login' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Password:
                            <input name='pass' type="password"/>
                        </label>
                    </p>
                    <p>
                        <label>Password:
                            <input name='checkPass' type="password"/>
                        </label>
                    </p>
                    <input type="submit" value='Send'/>
                    <button onClick={() => this.props.changeStateOutside('intro')}>Cancel</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({registration, changeStateOutside}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);