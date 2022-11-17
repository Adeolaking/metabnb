import React from "react";
import Frame151 from "../assets/Frame 151.png";
import Frame59528 from "../assets/Frame 59528.png";
import Frame153 from "../assets/Frame 153.png";
import Frame152 from "../assets/Frame 152.png";
import Frame154 from "../assets/Frame 154.png";
import Frame158 from "../assets/Frame 158.png";
import Frame157 from "../assets/Frame 157.png";
import Frame156 from "../assets/Frame 156.png";
import Frame155 from "../assets/Frame 155.png";


function Hero() {
  return (
    <div className="absolute top-[900px] lg:top-[831px] md:top-[731px] w-full">
      <h1 className="absolute  top-[20px]  font-bold text-[20px] leading-[20px] w-full  h-[60px] font-[Red Rose] text-center  md:text-[30px]   lg:top-[39px] lg:left-[313px] font-bold lg:text-[48px] lg:leading-[60px] lg:w-[817px] lg:h-[60px]  font-[Red Rose] text-center ">
        Inspiration for your next adventure
      </h1>
      <div className=" absolute flex flex-col top-[100px] lg:items-start lg:gap-[24px] lg:w-[1240px] lg:top-[142px]     md:items-start md:gap-[24px] md:w-[768px] ">
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


      </div>


    </div>
  );
}

export default Hero;
         