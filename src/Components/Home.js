import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import "./Home.css";

import Logo from "./Images/logo.png";

import MMW from "./Images/MW.png";
import W from "./Images/W.png";
import FI from "./Images/Ftrimg.PNG";


import NFTA from "./Images/NFTA.png";
import NFTB from "./Images/NFTB.png";
import NFTC from "./Images/NFTC.png";

export default function Home() {
  const style = {
    textAlign: "center",
    background: "teal ",
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
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Sara">
      <div className="Home ">
        <div className="overlay">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <img src={Logo} className="ml-5 LogoImg"></img>

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
              <form class="form-inline ">
                <button class=" mx-3 px-5 btn btnNav my-2 " type="submit">
                  <a href="/Stacking" className="text-white">Stacking</a>
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

        <div className="RCM container">
          <h1 className="text-white mt-5 RCM font-weight-bold ml-5">
            ROYAL CUBS MARKETPLACE
          </h1>
          <h4 className="RCM text-white ml-5">Stake your Cubs</h4>
        </div>

        <div className="text-white CnctBtn  text-center ">
          <h2 className="mb-5">
            Your wallet is not connected get started below
          </h2>
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
                <h3 className="text-white text-center ">Connect Wallet</h3>
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

          {/* <button class="mx-3 btn px-5 btnNav my-2 my-sm-0" type="submit">
            Connect
          </button> */}
        </div>
      </div>
      <div className="DivB ">
        <div className="container">
          <h1 className="pt-5 text-center text-white">
            ROYAL CUBS MARKETPLACE
          </h1>
          <h4 className="pb-5 text-center text-white">
            Spend your hard earned Cbs
          </h4>
        </div>

        <div>
          <div>
            <div className="container">
              <h3 className="text-white font-weight-bold pl-5 pb-4">
                Rare Items
              </h3>
              <Slide {...properties} className="bg-none Imgs">
                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="">
                    <h6 className="text-white  ">Items title</h6>
                    <img src={NFTB} className="  NftIMGS"></img>
                  </div>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTB} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <div>
            <div className="container">
              <h3 className="text-white font-weight-bold pl-5 pb-4">
                Epic Items
              </h3>

              <Slide {...properties} className="bg-none Imgs">
                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="">
                    <h6 className="text-white  ">Items title</h6>
                    <img src={NFTB} className="  NftIMGS"></img>
                  </div>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTB} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTC} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>

                <div className=" text-center">
                  <h6 className="text-white  ">Items title</h6>
                  <img src={NFTA} className="  NftIMGS"></img>
                  <div>
                    <button class="btnft">Sold Out</button>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 FTR">
            <div className="row">
                <div className="col-12 col-lg-3 pr-5 text-center">
            <img src={FI} className="ml-5 LogoImg "></img>
            </div>
            <div className="col-7 d-block ml-auto">
            </div>
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
