import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class RecoverPassword extends Component
{
    render() {
        return (
            <div className="flex items-center justify-center mt-40 mx-6">
                <div className="bg-white p-10 max-w-lg w-full rounded-md shadow-lg">
                    <div className="text-center bg-logo bg-contain h-20 bg-no-repeat items-center bg-center"/>
                    <h3 className="text-center my-5 text-lg text-primary font-bold">Recover your password</h3>
                    <form className="mt-5" method="POST" action="/recover-password">
                        {/*CSRF Token*/}
                        <input type="hidden" name="_token" value="96LGLQC0ylNCwHDLyTqFuBvSMwOqHi7voLu8lwj4"/>
                        <label className="block my-5">
                            <span className="text-sm font-bold">E-mail</span>
                            <input type="text" required name="email" className="form-input mt-1 block w-full rounded-md border-yellow-600"/>
                        </label>
                        <div className="flex items-center justify-between mt-10">
                            <label className="block">
                                <NavLink type="button" className="text-center bg-secondary p-2 rounded shadow w-48 text-white font-semibold" to="/login">Sign in</NavLink>
                            </label>
                            <label className="block">
                                <button type="submit" className="bg-primary p-2 rounded shadow w-48 text-white font-semibold">Recover</button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RecoverPassword;