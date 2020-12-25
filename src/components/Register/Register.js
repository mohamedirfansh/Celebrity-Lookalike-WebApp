import React from 'react';
import '../Signin/Signin.css';
import backendURL from '../../constants';
import { trackPromise } from 'react-promise-tracker';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            error: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onSubmitRegister = () => {
        if (this.state.email !== '' &&
            this.state.password !== '' &&
            this.state.name !== '') {
            trackPromise(
                fetch(backendURL + 'register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password,
                        name: this.state.name
                    })
                })
                .then(response => response.json())
                .then(user => {
                    if (user !== 'unsuccessful') {
                        this.props.loadUser(user)
                        this.props.onRouteChange('home');
                    } else {
                        this.setState({error: 'Invalid username or password!'});
                    }
                })
            ) 
        }
        else {
            this.setState({error: 'Invalid username or password!'});
        }
    }

    render() {
        return (
            <article className="br2 ba white mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 white signin">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="card pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" name="name" id="name" required
                                    onChange={this.onNameChange} 
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="card pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address" id="email-address" required
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="card b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" name="password" id="password" required
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitRegister}
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib submit" 
                            type="submit" value="Register" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => this.props.onRouteChange('signin')} className="register f6 link dim white db">Sign In instead</p>
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

export default Register;