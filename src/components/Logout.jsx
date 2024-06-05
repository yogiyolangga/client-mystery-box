import React from "react";
import webLogo from "../assets/logo.png";

const Logout = () => {
    return (
        <div className="py-10 px-4 mx-2 mb-6 bg-slate-500 rounded-lg shadow-lg shadow-white bg-opacity-50 text-white">
            <div className="w-full mb-5 text-base laptop:text-3xl font-bold text-center">
                <h1>Fortune Slot 88</h1>
            </div>
            <div className="w-full mb-5 text-base laptop:text-3xl font-bold text-center">
            </div>
            <div className="text-center">
                <a href="https://Fortune Slot 88.com/" className="font-bold py-2 px-4 bg-red-500 rounded-md shadow-sm shadow-white text-white hover:bg-slate-700 transition-all ease-in">Link alt Fortune Slot 88</a>
            </div>
            <img src="http://tbgroup-cdn.online/wp-content/uploads/head.png" alt="Fortune Slot 88" className="mx-auto my-8 rounded-md" />
            <a href="https://Fortune Slot 88.com/">
                <img src={webLogo} alt="Fortune Slot 88" className="mx-auto h-12" />
            </a>
        </div>
    )
}

export default Logout;