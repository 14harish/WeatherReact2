import React from "react";
// import "./current.css";
function Current({ current, city }) {
  return (
    <div className="flex flex-col rounded-lg max-w-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900 md:max-w-xl md:flex-row">
      <img
        className="h-20 w-28 md:h-auto md:w-56 md:rounded-none pb-3 "
        src={current.condition.icon}
        alt=""
      />
      <div className="flex flex-col justify-start pt-2 sm:pt-6 p-6 ">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {city.name}-{city.region}-{city.country}
        </h5>

        <ul className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          <li>
            Condition:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {current.condition.text}
          </li>
          <li>
            Date:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {current.last_updated}
          </li>
          <li>
            Temp:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {current.temp_c}&deg;C
          </li>
          <li>
            Wind Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.wind_kph}{" "}
            Kph
          </li>
          <li>Wind direction: &nbsp;&nbsp;{current.wind_dir}</li>
          <li>
            humudutiy: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {current.humidity}&deg;C
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Current;
{
  /* <div className="main_current">
       <div className="current">
         <div className="heading">
           <h1>
             {city.name}-{city.region}-{city.country}
           </h1>
         </div>
         <img src={current.condition.icon} alt="img" />
         <ul>
           <li>
             Condition:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {current.condition.text}
           </li>
           <li>
             Date:
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {current.last_updated}
           </li>
           <li>
             Temp:
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {current.temp_c}&deg;C
           </li>
           <li>
             Wind Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.wind_kph}{" "}
             Kph
           </li>
           <li>Wind direction: &nbsp;&nbsp;{current.wind_dir}</li>
           <li>
             humudutiy: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {current.humidity}&deg;C
           </li>
         </ul>
       </div>
     </div>  */
}
