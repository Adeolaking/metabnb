import React from "react";
import Vector from "../assets/Vector.png";
import FooterImg from "../assets/Footer.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";

function Footer() {
  return (
    <div className="footer max-w-screen-2xl absolute bg-[#1D1D1E] w-full top-[4945px] h-[400px] lg:h-[322px] lg:top-[2568px] md:top-[3516px] ">
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
  );
}

export default Footer;
