import React, { useState } from "react";
import topBox from "../assets/top-box.png";
import rightBox from "../assets/right-box.png";
import leftBox from "../assets/left-box.png";
import bgBox from "../assets/bg-box.png";
import { useEffect } from "react";
import Axios from "axios";

const Prize = () => {
  const [dataPrize, setDataPrize] = useState([]);

  let rupiah = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
  });

  function isNumber(str) {
    if (str >= 0) {
      return rupiah.format(str);
    } else {
      return str;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/prize");
        if (response.data) {
          setDataPrize(response.data);
        } else {
          alert("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    
    const topBox = document.querySelectorAll(".topBox");
    const leftBox = document.querySelectorAll(".leftBox");
    const rightBox = document.querySelectorAll(".rightBox");
    const bgBox = document.querySelectorAll(".bgBox");
    const hadiah = document.querySelectorAll("#hadiah");
    const btnCek = document.getElementById("tombolcek");
    
    btnCek.onclick = function () {
      for (const tb of topBox) {
        tb.classList.toggle("-translate-y-8");
        tb.classList.toggle("opacity-40");
      }

      for (const lb of leftBox) {
        lb.classList.toggle("-translate-x-8");
        lb.classList.toggle("opacity-40");
      }

      for (const rb of rightBox) {
        rb.classList.toggle("translate-x-8");
        rb.classList.toggle("opacity-40");
      }

      for (const bb of bgBox) {
        bb.classList.toggle("opacity-20");
      }

      for (const hdh of hadiah) {
        hdh.classList.toggle("scale-0");
        hdh.classList.toggle("z-30");
      }
    };
  })

  return (
    <div>
      <div className="w-full max-w-6xl bg-slate-900 bg-opacity-80 rounded-2xl mx-auto py-10 px-8">
        <div className="py-2">
          <div
            id="tombolcek"
            className="w-full flex justify-center cursor-pointer"
          >
            <div className="bg-[#ffa41c] active:scale-90 duration-200 text-black w-[90%] laptop:w-[30%] mt-2 py-2 rounded-md shadow-md shadow-black inline-block z-40 font-semibold uppercase text-center">
              Show Prize
            </div>
          </div>
          <div className="flex flex-wrap laptop:gap-1 justify-center">
            {dataPrize.length > 0 &&
              dataPrize.map((val, index) => (
                <div
                  key={index}
                  className="relative w-1/2 laptop:w-1/5 h-32 laptop:h-60"
                >
                  <img
                    src={topBox}
                    id="topBox"
                    alt="Mystery Box"
                    className="topBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-30  transition-all ease-out duration-200"
                  />
                  <img
                    src={leftBox}
                    id="leftBox"
                    alt="Mystery Box"
                    className="leftBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-200"
                  />
                  <img
                    src={rightBox}
                    id="rightBox"
                    alt="Mystery Box"
                    className="rightBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-20 transition-all ease-in-out duration-200"
                  />
                  <img
                    src={bgBox}
                    id="bgBox"
                    alt="Mystery Box"
                    className="bgBox h-32 laptop:h-44 absolute left-0 right-0 top-0 bottom-0 m-auto z-10 transition-all ease-in-out duration-200"
                  />
                  <h1
                    id="hadiah"
                    className="absolute doodle w-fit h-fit left-0 right-0 top-0 bottom-0 text-3xl font-extrabold underline text-white z-10 m-auto transition-all duration-300 scale-0"
                  >
                    {isNumber(val.prize)}
                  </h1>
                </div>
              ))}
          </div>
          <div className="w-full flex justify-center mt-5">
            <a
              href="/"
              className="bg-white w-[90%] laptop:w-[40%] py-2 rounded-md shadow-md shadow-slate-800 inline-block z-10 font-semibold uppercase text-center"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
