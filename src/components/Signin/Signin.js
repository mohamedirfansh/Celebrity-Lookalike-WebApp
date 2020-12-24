import React from 'react';
import './Signin.css';
import { trackPromise } from 'react-promise-tracker';
import backendURL from '../../constants';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            error: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        trackPromise(
            fetch(backendURL + 'signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user !== 'unsuccessful') {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
                else {
                    this.setState({error: 'Incorrect username or password!'});
                }
            })
        )
    }
    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br2 ba white mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 white signin">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="card pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address" id="email-address" required
                                onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="card b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="password" id="password" required
                                onChange={this.onPasswordChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib submit" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="register f6 link dim white db">Register</p>
                        </div>
                        <div>
                            <p className='err'>{this.state.error}</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;