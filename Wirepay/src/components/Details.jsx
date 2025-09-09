
import React from "react";
import { useNavigate } from "react-router-dom";

function Details() {
    const navigate = useNavigate();

    return (
        <div className="bg-black text-start pl-4 md:pl-10 pt-20 min-h-screen">
            <h1 className="text-4xl text-gray-200 pb-4 font-semibold">Welcome back!</h1>
            <p className="text-gray-400 text-sm">Don't have an account? Sign up.</p>
            <form className="mt-5">
                <div className="mb-4 pr-6 md:w-100">
                    <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
                        Email/Phone number
                    </label>
                    <input
                        className="shadow bg-gray-900 appearance-none border-black rounded-md w-full py-3 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4 pr-6 md:w-100">
                    <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow bg-gray-900 appearance-none border-black rounded-md w-full py-3 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="text-right mb-4 pr-6 md:max-w-100">
                    <a
                        className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center pr-6 md:w-100">
                    <button
                        onClick={() => navigate("/confirmation")}
                        className="bg-lime-300 w-full hover:bg-lime-700 text-black font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Details;