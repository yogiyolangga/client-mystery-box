import React from "react";
import topBox from "../assets/top-box.png";
import rightBox from "../assets/right-box.png";
import leftBox from "../assets/left-box.png";
import bgBox from "../assets/bg-box.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Clients = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [nominal, setNominal] = useState("");
  const [chance, setChance] = useState();
  const [id, setId] = useState();
  const [dataPrize, setDataPrize] = useState([]);

  const logout = () => {
    Axios.post("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn === false) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
        setNominal(response.data.user[0].hadiah);
        setId(response.data.user[0].id);
      } else {
        navigate("/");
      }
    });
  });

  let rupiah = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
  });

  function isNumber(str) {
    if (str >= 0){
      return rupiah.format(str)
    } else {
      return str;
    }
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setDataPrize(response.data.result)
      } else {
        navigate("/");
      }
    });
  }, [setDataPrize, navigate])

  const prizeArray = [];

  for (let i = 0; i < dataPrize.length; i++) {
    prizeArray.push(dataPrize[i].prize)
  }

  const filterPrize = prizeArray.filter(element => element !== nominal);

  const updateChange = () => {
    Axios.put(`http://localhost:3001/api/update/${id}`);
  };

  useEffect(() => {
    const topBox = document.querySelectorAll(".topBox");
    const leftBox = document.querySelectorAll(".leftBox");
    const rightBox = document.querySelectorAll(".rightBox");
    const bgBox = document.querySelectorAll(".bgBox");
    const hadiahElement = document.querySelectorAll("#hadiah");

    const bungkusan = document.getElementById("bungkusan");
    const bungkusan1 = document.getElementById("bungkusan1");
    const bungkusan2 = document.getElementById("bungkusan2");
    const bungkusan3 = document.getElementById("bungkusan3");
    const bungkusan4 = document.getElementById("bungkusan4");
    const bungkusan5 = document.getElementById("bungkusan5");
    const bungkusan6 = document.getElementById("bungkusan6");
    const bungkusan7 = document.getElementById("bungkusan7");
    const popUp = document.getElementById("popup");
    const popUp1 = document.getElementById("popup1");
    const cover = document.getElementById("cover");
    
    let rupiah = new Intl.NumberFormat("id-ID", {
      currency: "IDR",
    });
  
    function isNumber(str) {
      if (str >= 0){
        return rupiah.format(str)
      } else {
        return str;
      }
    }

    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setChance(response.data.user[0].chance);
      } else {
        navigate("/");
      }
    });

    const welcome = document.getElementById("welcome");

    if (chance < 1) {
      popUp.classList.add("scale-100");
      popUp1.classList.add("scale-100");
    } else {
      welcome.classList.add("hidden");
    }

    welcome.onclick = function () {
      window.alert("Kesempatan Tiket Sudah Digunakan!");
      logout();
    };

    bungkusan.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan.classList.add("scale-125");
        hadiahElement[0].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan1.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan1.classList.add("scale-125");
        hadiahElement[1].textContent = isNumber(nominal);
        hadiahElement[0].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan2.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan2.classList.add("scale-125");
        hadiahElement[2].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[0].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan3.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan3.classList.add("scale-125");
        hadiahElement[3].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[0].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan4.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan4.classList.add("scale-125");
        hadiahElement[4].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[0].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan5.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan5.classList.add("scale-125");
        hadiahElement[5].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[0].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan6.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan6.classList.add("scale-125");
        hadiahElement[6].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[0].textContent = isNumber(filterPrize[5]);
        hadiahElement[7].textContent = isNumber(filterPrize[6]);
      }
    };
    bungkusan7.onclick = function () {
      if (chance < 1) {
        window.alert("Kesempatan Anda sudah Habis!");
        logout();
      } else {
        fungsiClick();
        updateChange(id);
        bungkusan7.classList.add("scale-125");
        hadiahElement[7].textContent = isNumber(nominal);
        hadiahElement[1].textContent = isNumber(filterPrize[0]);
        hadiahElement[2].textContent = isNumber(filterPrize[1]);
        hadiahElement[3].textContent = isNumber(filterPrize[2]);
        hadiahElement[4].textContent = isNumber(filterPrize[3]);
        hadiahElement[5].textContent = isNumber(filterPrize[4]);
        hadiahElement[6].textContent = isNumber(filterPrize[5]);
        hadiahElement[0].textContent = isNumber(filterPrize[6]);
      }
    };

    function fungsiClick() {
      for (var i = 0; i <= 7; i++) {
        topBox[i].classList.add("-translate-y-8", "opacity-40");
        leftBox[i].classList.add("-translate-x-8", "opacity-40");
        rightBox[i].classList.add("translate-x-8", "opacity-40");
        bgBox[i].classList.add("opacity-20");
        hadiahElement[i].classList.remove("scale-0");
        hadiahElement[i].classList.add("z-30");
        popUp.classList.add("scale-100");
        popUp1.classList.add("scale-100");
        cover.classList.remove("hidden");
      }
    }
  });

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      return logout();
    }
    return "";
  };

  return (
    <div className="bg-slate-500 bg-opacity-40 overflow-hidden rounded-[100px] laptop:rounded-[200px] shadow-xl shadow-zinc-950 mb-10">
      <div
        id="welcome"
        className="w-full h-full bg-transparent absolute z-50"
      ></div>
      {/* Pop Up Start */}
      <div
        id="popup"
        className="w-[100%] fixed scale-0 left-0 right-0 top-0 bottom-0 bg-slate-600 bg-transparent px-2 flex items-center z-50"
      >
        <div
          id="popup1"
          className="w-[100%] scale-0 duration-[2000ms] laptop:h-96 transition-all ease-in-out tablet:w-[50%] bg-slate-900 py-6 px-6 rounded-md shadow-md flex justify-evenly flex-wrap items-center h-72 mx-auto "
        >
          <h3 className="text-2xl laptop:mb-11 laptop:text-3xl font-bold text-white text-center mb-3 sm:text-5xl">
            Congrats{" "}
            <span className="bg-gradient-to-tr from-yellow-600 to-slate-500 bg-clip-text text-transparent">
              You Got Prize
            </span>
          </h3>
          <div className="w-full relative py-20 mb-4">
            <img
              src={topBox}
              alt="Fortune Slot 88"
              className="h-32 laptop:h-44 absolute -translate-y-8 opacity-40 left-0 right-0 top-0 bottom-0 m-auto z-20"
            />
            <img
              src={leftBox}
              alt="Fortune Slot 88"
              className="h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 -translate-x-8 opacity-40"
            />
            <img
              src={rightBox}
              alt="Fortune Slot 88"
              className="h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 translate-x-8 opacity-40"
            />
            <img
              src={bgBox}
              alt="Fortune Slot 88"
              className="h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto opacity-20"
            />
            <h1
              className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white m-auto transition-all z-30"
            >
              {isNumber(nominal)}
            </h1>
          </div>
          <button
            className="text-center text-white text-xl bg-[#ffa41c] rounded-lg py-2 px-4 w-full hover:bg-[#6d4a16] hover:scale-90 duration-300 shadow-md shadow-black mt-4"
            onClick={logout}
          >
            Okay
          </button>
        </div>
      </div>
      {/* End Pup Up */}
      <div className="w-full max-w-4xl mx-auto py-10 px-8">
        <h1 className="text-center mx-2 font-bold py-2 text-white border rounded-md bg-grey-900 to-white laptop:text-4xl text-3xl">
        Choose Your Box <span className="text-[#ffa41c]">"{loginStatus}"</span>
        </h1>
        <div className="pt-3 relative">
          <div
            id="cover"
            className="w-full hidden h-full absolute z-40 bg-red-600 bg-transparent"
          ></div>
          <div className="flex flex-wrap gap-y-10 laptop:gap-10 justify-center">
            <div
              id="bungkusan"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan1"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan2"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan3"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan4"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan5"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan6"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
            <div
              id="bungkusan7"
              className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60 cursor-pointer"
            >
              <img
                src={topBox}
                id="topBox"
                alt="Fortune Slot 88"
                className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-500"
              />
              <img
                src={leftBox}
                id="leftBox"
                alt="Fortune Slot 88"
                className="leftBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={rightBox}
                id="rightBox"
                alt="Fortune Slot 88"
                className="rightBox  h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-500"
              />
              <img
                src={bgBox}
                id="bgBox"
                alt="Fortune Slot 88"
                className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-500"
              />
              <h1
                id="hadiah"
                className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all scale-0"
              >
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
