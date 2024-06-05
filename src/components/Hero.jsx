import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [kode, setKode] = useState("");
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      kode: kode,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        navigate("/clients");
      }
    });
  };

  useEffect((event) => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        // setLoginStatus(response.data.user[0].username);
        navigate("/clients");
      }
    });
  });

  return (
    <div className="py-6 w-full laptop:w-2/3 mx-auto bg-transparent rounded-2xl bg-black bg-opacity-60">
      <img
        src={hero}
        alt="Mystery Box"
        className="z-10 mx-auto w-[75%] tablet:w-1/3 max-w-xl rounded-lg"
      />
      <div className="p-4 mx-auto max-w-sm laptop:max-w-lg bg-slate-400 rounded-xl bg-opacity-40">
        <div>
          <input
            id="username"
            name="username"
            type="text"
            className="h-10 w-full mb-2 px-2 rounded-md shadow-md uppercase shadow-gray-500"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="kode"
            name="kode"
            type="text"
            className="h-10 w-full px-2 rounded-md shadow-md shadow-gray-500 uppercase"
            placeholder="Ticket Code"
            maxLength={5}
            onChange={(e) => {
              setKode(e.target.value);
            }}
          />
        </div>
        <div className="transition-all ease-in">
          <p className="text-center mt-2 text-red-600 bg-slate-200 rounded-md">
            {loginStatus}
          </p>
        </div>
        <a href="/" rel="noreferrer" target="_blank">
          <p className="text-slate-900 font-semibold underline text-right mr-1">
            No have code ? Create one here
          </p>
        </a>
        <div>
          <button
            className="bg-[#ffa41c] w-full text-black mt-2 py-2 rounded-md shadow-md shadow-slate-800 inline-block z-10 font-semibold hover:bg-yellow-700 hover:py-2 uppercase"
            onClick={login}
          >
            Play
          </button>
          <a
            href="/prize"
            className="bg-white w-full mt-2 py-2 rounded-md shadow-md shadow-slate-800 inline-block z-10 font-semibold hover:bg-slate-400 transition-all ease-in-out hover:text-white hover:py-2 uppercase text-center"
          >
            Check Prize
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
