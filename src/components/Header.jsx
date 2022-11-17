import React, { useState } from "react";
import MetabnbLogo from "../assets/MetabnbLogo.png";
import MetabnbHome from "../assets/MetabnbHome.png";
import RightImage from "../assets/Right Image.png";
import Image66 from "../assets/image 66.png";
import Arrow from "../assets/ArrowRight.png";
import MBToken from "../assets/MBToken.png";
import MetaMask from "../assets/MetaMask.png";
import OpenSea from "../assets/OpenSea.png";
import WalletConnect from "../assets/WalletConnect.png";
import Metamask from "../assets/ForMetaMask.png";
import X from "../assets/x.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setNavbar(false)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [navbar, setNavbar] = useState(false);

  const navLinkList = [
    {
    name: "Home",
    linkTo: "/",
    id: "home__link",
    title: "home page",
  },
  {
    name: "Place to stay",
    linkTo: '/placetostay',
    id: "placeToStay__link",
    title: "place to stay",
  },
  {
    name: "NFT",
    linkTo: "/",
    id: "twitter__link",
    title: "",
  },
  {
    name: "community",
    linkTo: "/",
    id: "community__link",
    title: "",
  },
]
  return (
    <div className="relative  items-center ">
      <div className=" max-w-screen-xl pl-4 pr-4 pt-4 mb-5 flex flex-row items-center justify-between lg:pl-[100px] lg:pt-0   md:pl-[35px] md:pt-6  ">
        <div className="logo flex flex-row gap-2 items-center  lg:h-[36.67px] md:h-[36.67px] ">
          <img
            src={MetabnbHome}
            alt="#"
            className="w-[30px] lg:w-[41.99px] lg:h-[36.37px] md:w-[41.99px] md:h-[36.37px] "
          />
          <img
            src={MetabnbLogo}
            alt="#"
            className="w-[120px] lg:w-[188.1px] lg:h-[32.19px]  "
          />
        </div>

        <nav class="bg-white  flex flex-col justify-between items-center">
          <button
            onClick={() => setNavbar(!navbar)}
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              navbar ? "block" : "hidden"
            }  lg:block  md:pb-0 md:mt-0   `}
            id="navbar-default"
          >
            <div
              className={`${
                navbar ? "absolute" : ""
              } left-20 z-10 flex flex-col items-center text-white p-10 mt-4 bg-gray-500 rounded-lg border md:left-[190px] border-gray-100 lg:flex-row lg:gap-28  lg:rounded-none lg:border-none lg:bg-white gap-5`}
            >
              <ul className="flex flex-col gap-2  md:flex-row md:gap-[48px] md:p-0     lg:gap-[48px] lg:p-0 ">
                {

                  navLinkList.map((navlink, key)=>{
                    return(
                      <li key={key} className=" text-white hover:text-blue-600 lg:text-[#434343] cursor-pointer text-[20px] font-[Red Rose] font-normal leading-[25px] ">
                        <a href={navlink.linkTo}>Home</a>
                      </li>
                    )
                  })
                  
                }
              </ul>

              <button
                className=" bg-[#A02279] w-[170px] h-[48px] rounded-lg capitalize text-white"
                onClick={handleOpen}
              >
                connect wallet
              </button>
              <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Div className="h-screen ">
                  <Box
                    sx={{  }}
                    className="flex flex-col items-start p-0 absolute h-[326px] left-[18px] md:left-[100px] lg:left-[420px] top-[200px] bg-white rounded-2xl w-[330px] md:w-[600px] lg:w-[600px] "
                  >
                    <div className="flex flex-row lg:justify-between items-center py-[24px] px-[32px] gap-16 w-[370px] lg:gap-[300px] lg:w-[630px] md:gap-[300px] md:w-[630px] h-[78px] ">
                      <h2 className="#333333 h-[30px] font-[Red Rose] font-bold text-[24px] leading-[30px] ">
                        Connect Wallet
                      </h2>
                      <Button onClick={handleClose}>
                        <img src={X} alt="#" />
                      </Button>
                    </div>
                    <div className="border border-solid border-[#CFD8DC] lg:w-[600px]  md:w-[600px] w-[330px] "></div>
                    <p className="text-[#333333] w-[350px] h-[20px] font-[Red Rose] font-semibold text-[16px] leading-[20px] pt-[27px] pb-[20px] pl-[32px] ">
                      Choose your preferred wallet:
                    </p>
                    <div className="pt-[20px] flex flex-col gap-3 pl-3 pr-3 md:pr-0 lg:pr-0 lg:pl-[32px] md:pl-[32px] lg:w-[536px] md:w-[536px] ">
                      <button className="flex flex-row py-[12px] px-[20px] lg:w-[536px] md:w-[536px]  h-[68px] gap-[135px] items-center justify-between bg-[#F8F9FA] rounded-2xl border border-solid border-[#CFD8DC] ">
                        <div className="flex flex-row gap-2 items-center">
                          {" "}
                          <img src={Image66} alt="#" />{" "}
                          <span className="text-[#000000] text-[18px] leading-[23px] font-semibold  ">
                            Metamask
                          </span>
                        </div>
                        <img src={Arrow} alt="#" />
                      </button>

                      <button className="flex flex-row py-[12px] px-[20px] lg:w-[536px] md:w-[536px] h-[68px] gap-[135px] items-center justify-between bg-[#F8F9FA] rounded-2xl border border-solid border-[#CFD8DC] ">
                        <div className="flex flex-row gap-2 items-center">
                          {" "}
                          <img src={WalletConnect} alt="#" />{" "}
                          <span className="text-[#000000] text-[18px] leading-[23px] font-semibold  ">
                            WalletConnect
                          </span>
                        </div>
                        <img src={Arrow} alt="#" />
                      </button>
                    </div>
                  </Box>
                </Div>
              </Modal>
            </div>
          </div>
        </nav>
      </div>

      <div className="absolute pl-4 pr-4 pt-4 gap-[15px] flex flex-col lg:flex-row items-center  lg:gap-[55px] lg:justify-center lg:left-[100px] lg:top-[216px]  md:flex-row  md:gap-[35px] md:justify-center md:left-[20px] md:top-[150px]  ">
        <div className="flex flex-col lg:items-start p-0 lg:gap-[48px] lg:w-[646px] ">
          <h1 className="font-[Red Rose] leading-[120%] w-[350px] lg:w-[646px] font-normal md:text-[40px] text-[35px] lg:text-[56px] lg:leading-[140%] text-[#434343]    ">
            Rent a <span className="text-[#A02279] font-semibold">Place</span>{" "}
            away from{" "}
            <span className="text-[#A02279] font-semibold ">Home</span> in the{" "}
            <span className="text-[#A02279] font-semibold"> Metaverse</span>
          </h1>
          <div className="pt-2 pb-4 ">
            <p className="text-[#434343] w-[330px] text-[15px] font-semibold lg:w-[636px] lg:text-[24px] lg:leading-[35px] lg:font-normal    md:text-[19px] md:leading-[35px] md :font-normal font-[Red Rose] ">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          </div>

          <div className="lg:w-[618.71px] h-[54.08px] flex flex-row items-center ">
            <input
              type="text"
              placeholder="Search for location"
              className="w-[200px] h-[40px] outline-none p-4 lg:w-[390px] lg:h-[54px] bg-[#F7F7F7] lg:p-6 border border-solid border-[#A3A3A3] rounded-l-lg"
            />
            <button className="w-[120px]  h-[40px] rounded-r-lg bg-[#A02279] text-white font-normal text-center lg:text-[16px] lg:w-[230px]  lg:h-[54px]  ">
              Search
            </button>
          </div>
        </div>

        <div className="w-[300px] h-[300px] lg:w-[476px] lg:h-[459px] md:w-[330px] md:h-[259px] ">
          <img src={RightImage} alt="#" />
        </div>
      </div>

      <div className="bottom absolute max-w-screen-2xl pt-2 pb-2 pl-16  items-start flex flex-col bg-[#A02279] gap-1  top-[700px] w-screen  lg:py-[10px] lg:px-[100px] lg:gap-[264px] lg:items-center lg:justify-center lg:flex-row lg:h-[70px] lg:top-[750px] lg:w-full       md:py-[10px] md:px-[100px] md:gap-[66px] md:items-center md:justify-center md:flex-row md:h-[70px] md:top-[650px]   ">
        <div className="lg:h-[50px] md:h-[50px] flex flex-row items-center ">
          <img src={MBToken} alt="MBToken" />
          <h1 className=" font-bold  text-[#F7F7F7] lg:leading-[27px] text-[40px]">
            MBToken
          </h1>
        </div>
        <div className="lg:h-[50px] md:h-[50px] flex flex-row items-center gap-1 ">
          <img src={MetaMask} alt="Metamask" />
          <img src={Metamask} alt="Metamask" />
        </div>
        <div className="lg:h-[50px] md:h-[50px] flex flex-row items-center gap-1 ">
          <img src={OpenSea} alt="Opensea" />
          <h1 className=" font-bold text-[#F7F7F7]  lg:leading-[96%] text-[32px]">
            OpenSea
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;

const Div = styled.div`
  background: rgba(64, 64, 64, 0.3);
`;
