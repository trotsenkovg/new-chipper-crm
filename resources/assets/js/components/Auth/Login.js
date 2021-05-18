import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Login extends Component
{
    render() {
        return (
            <div className="flex items-center justify-center mt-40 mx-6">
                <div className="bg-white p-10 max-w-lg w-full rounded-md shadow-lg">
                    <div className="text-center bg-logo bg-contain h-20 bg-no-repeat items-center bg-center"/>
                    <h3 className="text-center my-5 text-lg text-primary font-bold">Sign in your Account</h3>
                    <form className="mt-5" method="POST" action="/login">
                        {/*CSRF Token*/}
                        <input type="hidden" name="_token" value="96LGLQC0ylNCwHDLyTqFuBvSMwOqHi7voLu8lwj4"/>
                        <label className="block">
                            <span className="text-sm font-bold">E-mail</span>
                            <input type="text" placeholder={"Enter email"} required name="email" className="form-input mt-1 block w-full rounded-md border-yellow-600"/>
                        </label>
                        <label className="block my-5">
                            <span className="text-sm font-bold">Password</span>
                            <input type="password" required placeholder={"Enter password"} name="password" className="form-input mt-1 block w-full rounded-md border-yellow-600"/>
                        </label>
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox"
                                           className="form-checkbox border-secondary"
                                           name="remember" id="remember"/>
                                    <span className="mx-2 text-primary text-sm">Remember Me</span>
                                </label>
                            </div>

                            <div>
                                <NavLink className="block text-sm text-primary hover:underline "
                                   to="/recover">
                                    Forgot Your Password?
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <label className="block">
                                <NavLink type="button" className="text-center bg-secondary p-2 rounded shadow max-w-xs w-48 text-white font-semibold" to="/register">Registration</NavLink>
                            </label>
                            <label className="block">
                                <button type="submit" className="text-center bg-primary p-2 rounded shadow max-w-xs w-48 text-white font-semibold">Sign me in</button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;