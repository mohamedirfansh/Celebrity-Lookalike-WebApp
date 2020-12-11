import React from 'react';
import './Signin.css';

const Signin = ({onRouteChange}) => {
    return (
        <article className="br2 ba white mv4 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 white signin">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="card pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="card b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib submit" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="register f6 link dim white db">Register</p>
                    </div>
                </div>
            </main>
        </article>

    );
}

export default Signin;