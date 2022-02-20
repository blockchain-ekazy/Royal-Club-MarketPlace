import React from "react";
import "./Stacking.css";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import Logo from "./Images/logo.png";

import MMW from "./Images/MW.png";
import W from "./Images/W.png";
import FI from "./Images/Ftrimg.PNG";

import NFTA from "./Images/NFTA.png";
import NFTB from "./Images/NFTB.png";
import NFTC from "./Images/NFTC.png";

export default function Stacking() {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="Home ">
        <div className="overlay">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a href="/">
              <img src={Logo} className="ml-5 LogoImg"></img>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse  navbar-collapse" id="navbarSupportedContent">
              <ul class=" mr-auto"></ul>
              <form class="form-inline">
                <button class=" mr-3 pr-3 btn btnNavPink  my-2 " type="submit">
                  <img src={Logo} className="mr-3 Btnimg"></img>
                  Totel / day
                </button>{" "}
                <button class=" mx-3 pr-3 btn btnNavpurple my-2 " type="submit">
                  <img src={Logo} className="mr-3 Btnimg"></img>
                  framed
                </button>{" "}
                <button
                  class=" mx-3 pr-3 btn btnNav bg-primary my-2 "
                  type="submit"
                >
                  <img src={Logo} className="mr-3 Btnimg"></img>
                  Balance
                </button>
                <button class=" mx-3 px-5 btn btnNav my-2 " type="submit">
                  Stacking
                </button>
                <div class="section full-height">
                  <input
                    class="modal-btn"
                    type="checkbox"
                    id="modal-btn"
                    name="modal-btn"
                  ></input>
                  <label for="modal-btn">
                    Connect <i class="uil uil-expand-arrows"></i>
                  </label>
                  <div class="modal  ">
                    <div class="modal-wrap p-5 container ">
                      <h3 className="text-white text-center ">
                        Connect Wallet
                      </h3>
                      <div className="row pt-3 pb-3 px-3">
                        <div className="MMWImg p-4 col ">
                          <img src={MMW} className="d-block mx-auto  "></img>
                        </div>
                        <div className="WImg ml-3 p-4 col">
                          <img src={W} className="d-block mx-auto "></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>

        <div className="RCM py-5  ">
          <h1 className="text-white mt-5 RCM font-weight-bold ml-5">
            ROYAL CUBS MARKETPLACE
          </h1>
          <h4 className="RCM text-white ml-5">Stake your Cubs</h4>
        </div>
        <hr className="text-white bg-light mb-5"></hr>

        <div className="container-fluid ">
          <div className="row  align-items-center">
            <div className="col-12 col-md-6 pl-5 ">
              <Slide {...properties} className="bg-none Imgs">
                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Stake</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Stake</button>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="">
                    <h6 className="text-white  ">Items title</h6>
                    <img src={NFTB} className="  NftIMGS"></img>
                  </div>
                  <div>
                    <button class="btnft">Stake</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Stake</button>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-12 col-md-6">
              <button
                class="d-block  mx-auto px-5 btn btnNav my-2 "
                type="submit"
              >
                Stake Cubs - 4
              </button>
            </div>
          </div>
        </div>

        <hr className="text-white bg-light mt-5"></hr>

        <div className="container-fluid py-5 FTR">
          <div className="row">
            <div className="col-12 col-lg-3 pr-5 text-center">
              <img src={FI} className="ml-5 LogoImg "></img>
            </div>
            <div className="col-7 d-block ml-auto"></div>
            <div className=" col-12 col-lg-2 text-center">
              <i class="fa-brands fa-twitter text-white icoo m-3 "></i>
              <i class="fa-brands fa-instagram text-white icoo m-3"></i>
              <i class="fa-brands fa-discord text-white m-3 icoo"></i>
            </div>
          </div>
          {/* <h3 className="text-white">THE ROYAL CUBS</h3> */}
        </div>
      </div>
    </div>
  );
}
