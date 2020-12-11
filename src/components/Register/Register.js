import React from 'react';
import '../Signin/Signin.css';

const Register = ({onRouteChange}) => {
    return (
        <article className="br2 ba white mv4 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 white signin">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="card pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                    </div>
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
                        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib submit" 
                        type="submit" value="Register" />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('signin')} className="register f6 link dim white db">Sign In instead</p>
                    </div>
                </div>
            </main>
        </article>

    );
}

export default Register;