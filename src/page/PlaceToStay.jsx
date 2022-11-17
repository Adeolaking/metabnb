import React, { useState } from "react";
import MetabnbLogo from "../assets/MetabnbLogo.png";
import MetabnbHome from "../assets/MetabnbHome.png";
import Image66 from "../assets/image 66.png";
import Arrow from "../assets/ArrowRight.png";
import Setting from "../assets/setting-5.png";
import WalletConnect from "../assets/WalletConnect.png";
import X from "../assets/x.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Frame151 from "../assets/Frame 151.png";
import Frame59528 from "../assets/Frame 59528.png";
import Frame153 from "../assets/Frame 153.png";
import Frame152 from "../assets/Frame 152.png";
import Frame154 from "../assets/Frame 154.png";
import Frame158 from "../assets/Frame 158.png";
import Frame157 from "../assets/Frame 157.png";
import Frame156 from "../assets/Frame 156.png";
import Frame155 from "../assets/Frame 155.png";
import Frame161 from "../assets/Frame 161.png";
import Frame162 from "../assets/Frame 162.png";
import Frame163 from "../assets/Frame 163.png";
import Frame164 from "../assets/Frame 164.png";
import Frame165 from "../assets/Frame 165.png";
import Frame166 from "../assets/Frame 166.png";
import Frame167 from "../assets/Frame 167.png";
import Frame168 from "../assets/Frame 168.png";
import Vector from "../assets/Vector.png";
import FooterImg from "../assets/Footer.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
 


function PlaceToStay() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
      setNavbar(false)
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    const [navbar, setNavbar] = useState(false);
  
  return (
    <div className="relative">
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
                <li className=" text-white hover:text-blue-600 lg:text-[#434343] cursor-pointer text-[20px] font-[Red Rose] font-normal leading-[25px] ">
                  <a href="/">Home</a>
                </li>
                <li className=" text-white hover:text-blue-600 lg:text-[#434343] cursor-pointer text-[20px] font-[Red Rose] font-normal leading-[25px] ">
                  <a href="/placetostay">Place To Stay</a>
                </li>
                <li className=" text-white hover:text-blue-600 lg:text-[#434343] cursor-pointer text-[20px] font-[Red Rose] font-normal leading-[25px] ">
                  <a href="/">NFTs</a>
                </li>
                <li className=" text-white hover:text-blue-600 lg:text-[#434343] cursor-pointer text-[20px] font-[Red Rose] font-normal leading-[25px] ">
                  <a href="/">Community</a>
                </li>
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

  <div>
    <div className=" absolute flex flex-col left-8 gap-3 w-[50px] lg:flex-row lg:gap-4 lg:items-start lg:top-[218px] lg:w-[921px] lg:left-[100px] md:flex-row md:left-[30px] md:top-[120px] md:w-[740px] md:gap-1 ">
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px] lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Restaurant</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Cottage</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Castle</span></button>
        <button className="w-[112px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>fantacy city</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>beach</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Carbins</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Off-grid</span></button>
        <button className="w-[98px] h-[25px] leading-[25px] text-[20px]  lg:text-[20px] md:text-[18px] font-[Red Rose] text-[#434343] "><span>Farm</span></button>
   </div>
   <button className="absolute left-44 lg:left-[1055px] lg:top-[206px] w-[161px] h-[48px] rounded-xl border border-solid border-[#B4B4B4] items-center p-2 md:left-[30px]  md:top-40"  >
   <div className="flex flex-row justify-between ">
   <span className=" leading-[25px] text-[20px] font-[Red Rose] text-[#434343]">Location</span>
   <img src={Setting} alt="#" />
   </div>
    </button>
  </div>


  <div className=" absolute flex flex-col top-[400px] lg:items-start lg:gap-[24px] lg:w-[1024px] lg:top-[318px]    md:top-[260px]  md:items-start md:gap-[24px] md:w-[768px] ">
        {/* column 1 */}
        <div className="flex flex-col absolute items-center left-[35px] lg:flex-row  lg:items-start lg:gap-[24px] p-0 lg:left-[60px]  lg:h-[372px] md:flex-row  md:h-[372px] md:left-[50px] md:items-start">
             {/* first row*/}
          <div className="first-r w-[292px] h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl ">
            <div className="absolute left-0 top-0 ">
              <img src={Frame151} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
              <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                    <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                    </div>
              </div>
              <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                    <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                    <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
              </div>
              <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
            </div>
          </div>


   {/* second row*/}
   <div className="second-r absolute top-[390px] w-[292px] h-[372px] lg:left-[316px] lg:top-0  bg-white border border-solid border-[#D7D7D7] rounded-xl  md:left-[370px] md:top-0 ">
            <div className="absolute left-0 top-0 ">
              <img src={Frame153} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
              <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                    <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                    </div>
              </div>
              <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                    <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                    <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
              </div>
              <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
            </div>
          </div>

  {/* third row*/}
  <div className="third-r absolute top-[780px] h-[372px] lg:left-[632px] w-[292px] lg:top-0  bg-white border border-solid border-[#D7D7D7] rounded-xl  md:top-[400px] ">
            <div className="absolute left-0 top-0 ">
              <img src={Frame152} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
              <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                    <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                    </div>
              </div>
              <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                    <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                    <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
              </div>
              <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
            </div>
          </div>


  {/* fourth row*/}
  <div className="fourth-r absolute top-[1170px] h-[372px] lg:left-[948px] w-[292px] lg:top-0 bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-[400px] ">
            <div className="absolute left-0 top-0 ">
              <img src={Frame154} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
              <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                    <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                    </div>
              </div>
              <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                    <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                    <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
              </div>
              <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
            </div>
          </div>
        </div>


      
 {/* column 2 */}
 <div className="flex flex-col top-[1560px] absolute items-center left-[35px] lg:flex-row lg:items-start lg:gap-[24px] p-0 lg:left-[60px]  lg:h-[372px] lg:top-[400px]  md:top-[800px] md:left-[50px]">

{/* first row*/}
<div className="first-r w-[292px]  h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame158} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* second row*/}
<div className="second-r absolute top-[390px] h-[372px] lg:top-0 w-[292px] lg:left-[316px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-0">
         <div className="absolute left-0 top-0 ">
           <img src={Frame157} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* third row*/}
<div className="third-r absolute top-[780px] h-[372px] lg:top-0 lg:left-[632px] w-[292px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:top-[400px]">
         <div className="absolute left-0 top-0 ">
           <img src={Frame156} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>


{/* fourth row*/}
<div className="fourth-r absolute top-[1170px] h-[372px] lg:top-0  lg:left-[948px] w-[292px] lg:h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-[400px] ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame155} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

  </div>


      
 {/* column 3 */}
 <div className="flex flex-col top-[1560px] absolute items-center left-[35px] lg:flex-row lg:items-start lg:gap-[24px] p-0 lg:left-[60px]  lg:h-[372px] lg:top-[800px]  md:top-[1600px] md:left-[50px]">

{/* first row*/}
<div className="first-r w-[292px]  h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame161} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* second row*/}
<div className="second-r absolute top-[390px] h-[372px] lg:top-0 w-[292px] lg:left-[316px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-0">
         <div className="absolute left-0 top-0 ">
           <img src={Frame162} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* third row*/}
<div className="third-r absolute top-[780px] h-[372px] lg:top-0 lg:left-[632px] w-[292px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:top-[400px]">
         <div className="absolute left-0 top-0 ">
           <img src={Frame163} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>


{/* fourth row*/}
<div className="fourth-r absolute top-[1170px] h-[372px] lg:top-0  lg:left-[948px] w-[292px] lg:h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-[400px] ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame164} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

  </div>


      
 {/* column 4 */}
 <div className="flex flex-col top-[1560px] absolute items-center left-[35px] lg:flex-row lg:items-start lg:gap-[24px] p-0 lg:left-[60px]  lg:h-[372px] lg:top-[1200px]  md:top-[2400px] md:left-[50px]">

{/* first row*/}
<div className="first-r w-[292px]  h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame165} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* second row*/}
<div className="second-r absolute top-[390px] h-[372px] lg:top-0 w-[292px] lg:left-[316px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-0">
         <div className="absolute left-0 top-0 ">
           <img src={Frame166} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

{/* third row*/}
<div className="third-r absolute top-[780px] h-[372px] lg:top-0 lg:left-[632px] w-[292px]  bg-white border border-solid border-[#D7D7D7] rounded-xl md:top-[400px]">
         <div className="absolute left-0 top-0 ">
           <img src={Frame167} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>


{/* fourth row*/}
<div className="fourth-r absolute top-[1170px] h-[372px] lg:top-0  lg:left-[948px] w-[292px] lg:h-[372px] bg-white border border-solid border-[#D7D7D7] rounded-xl md:left-[370px] md:top-[400px] ">
         <div className="absolute left-0 top-0 ">
           <img src={Frame168} alt="#" className=" ml-[16px] mt-[16px] w-[260px] h-[265px] "/>
           <div className="absolute w-[262px] h-[14px] left-[16px] top-[297px] ">
             <div className="flex flex-row justify-between items-center">
                 <h2 className="w-[67px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">Desert King</h2>
                 <h2 className=" h-[14px] font-bold text-[12px] leading-[13px] text-[#434343]  ">1MBT per night</h2>
                 </div>
           </div>
           <div className="absolute w-[280px] h-[14px] left-[16px] top-[321px] justify-between flex flex-row ">
                 <h2 className="w-[83px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">2345km away</h2>
                 <h2 className="  w-[148px] h-[14px] font-normal text-[12px] leading-[13px] text-[#434343]  ">available for 2weeks stay</h2>
           </div>
           <img src={Frame59528} alt="#" className="absolute left-[16px] top-[344px] w-[92px] h-[12px] " />
         </div>
       </div>

  </div>

      </div>


      <div className="footer max-w-screen-2xl absolute bg-[#1D1D1E] w-full top-[3600px] h-[400px] lg:h-[322px] lg:top-[2000px] md:top-[3516px] ">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start pt-[60px] lg:pl-[113px] lg:pr-[150px]">
        <div className="flex flex-col mb-12 lg:mb-0 items-center ">
          <div className="flex flex-row w-[233px] h-[40px] gap-2 items-center  ">
            <img src={Vector} alt="#" />
            <img src={FooterImg} alt="#" />
          </div>
   <div className="flex flex-row gap-8 lg:gap-0 lg:flex-col   md:gap-16 ">
   <div className=" flex flex-row mt-8 lg:mt-[100px] h-[18px] gap-10 ">
            <img src={Facebook} alt="#" />
            <img src={Instagram} alt="#" />
            <img src={Twitter} alt="#" />
          </div>
          <div className="flex flex-row gap-3 mt-8 lg:mt-16">
            <span className="text-[18px] font-bold leading-[16px] items-center font-[Red Rose] text-white">
              &copy;{" "}
            </span>
            <p className="text-[16px] font-normal leading-[16px] items-center font-[Red Rose] text-white ">
              {new Date().getFullYear()} Metabnb
            </p>
          </div>
   </div>

        </div>

       <div className="flex flex-row gap-10 lg:gap-44 md:gap-44">
     
          <div className="flex flex-col">
            <h1 className="text-white leading-[22px] font-bold text-[18px] mb-5 font-[Red Rose]">
              Community
            </h1>
            <nav className="flex fle-col gap-4 text-white leading-[35px] font-normal font-[Red Rose] text-[14px]">
              <ul>
                <li>
                  <a href="/">NFT</a>
                </li>
                <li>
                  <a href="/">Tokens</a>
                </li>
                <li>
                  <a href="/">Landlords</a>
                </li>
                <li>
                  <a href="/">Discord</a>
                </li>
              </ul>
            </nav>
          </div>
       

        <div className="flex flex-col">
            <h1 className="text-white leading-[22px] font-bold text-[18px] mb-5 font-[Red Rose]">
            Places
            </h1>
            <nav className="flex fle-col gap-4 text-white leading-[35px] font-normal font-[Red Rose] text-[14px]">
              <ul>
                <li>
                  <a href="/">Castle</a>
                </li>
                <li>
                  <a href="/">Farms</a>
                </li>
                <li>
                  <a href="/">Beach</a>
                </li>
                <li>
                  <a href="/">Learn more</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col">
            <h1 className="text-white leading-[22px] font-bold text-[18px] mb-5 font-[Red Rose]">
            About us
            </h1>
            <nav className="flex fle-col gap-4 text-white leading-[35px] font-normal font-[Red Rose] text-[14px]">
              <ul>
                <li>
                  <a href="/">Road map</a>
                </li>
                <li>
                  <a href="/">Creators </a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
       </div>

      </div>
    </div>

    </div>
  )
}

export default PlaceToStay
const Div = styled.div`
  background: rgba(64, 64, 64, 0.3);
`;