import React from "react";
// import "./forecast.css";

function Forecast({ forecast, pos }) {
  console.log(forecast);
  return (
    <div className="flex flex-row sm:flex-col ml-2 sm:ml-0 bg-gray-900 shadow-md border border-gray-900 rounded-lg w-96 sm:w-80 mb-0 sm:mb-5 text-white">
      <img
        className="h-16 w-28 md:h-36 md:w-46 md:rounded-none pb-1"
        src={forecast.day.condition.icon}
        alt=""
      />
      <div className="pr-5 sm:p-5 bg-gray-900">
        <ul className="mb-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-200">
          <li>
            <span id="s1">Sunrise:</span>
            {forecast.astro.sunrise}
          </li>
          <li>
            <span id="s2">Sunset:</span>
            {forecast.astro.sunset}
          </li>
          <li>
            <span id="s3">Moonrise:</span>
            {forecast.astro.moonrise}
          </li>
          <li>
            <span id="s5">Average humidity:</span>
            {forecast.day.avghumidity}&deg;C
          </li>
          <li>
            <span id="s6">Average temparture:</span>
            {forecast.day.avgtemp_c}&deg;C
          </li>
          <li>
            <span id="s7">Condition:</span>
            {forecast.day.condition.text}
          </li>
          <li>
            <span id="s10">Chance Of Rain</span>
            {forecast.day.daily_chance_of_rain}%
          </li>
        </ul>
        {/* <p className="font-normal mb-3 w-52 h-56 sm:w-52 sm:h-44">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p className="font-normal mb-3 w-52 h-56 sm:w-52 sm:h-44">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p className="font-normal mb-3 w-52 h-56 sm:w-52 sm:h-44">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p className="font-normal mb-3 w-52 h-56 sm:w-52 sm:h-44">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
      </div>
    </div>
  );
}

export default Forecast;

{
  /* const studentList = forecast.forecast.forecastday.map((data, pos) => { *
//   console.log(forecast.forecast.forecastday[0]);
//     return (
//       <div className="box">
//         <div className="imgbox">
//           <h1>{forecast.forecast.forecastday[pos].date}</h1>
//           <img
//             src={forecast.forecast.forecastday[pos].day.condition.icon}
//             alt="img"
//           />
//         </div>
//         <ul>
//           <li>
//             <span id="s1">Sunrise:</span>
//             {forecast.forecast.forecastday[pos].astro.sunrise}
//           </li>
//           <li>
//             <span id="s2">Sunset:</span>
//             {forecast.forecast.forecastday[pos].astro.sunset}
//           </li>
//           <li>
//             <span id="s3">Moonrise:</span>
//             {forecast.forecast.forecastday[pos].astro.moonrise}
//           </li>
//           <li>
//             <span id="s4">Moonset:</span>
//             {forecast.forecast.forecastday[pos].astro.moonset}
//           </li>
//           <li>
//             <span id="s5">Average humidity:</span>
//             {forecast.forecast.forecastday[pos].day.avghumidity}&deg;C
//           </li>
//           <li>
//             <span id="s6">Average temparture:</span>
//             {forecast.forecast.forecastday[pos].day.avgtemp_c}&deg;C
//           </li>
//           <li>
//             <span id="s7">Condition:</span>
//             {forecast.forecast.forecastday[pos].day.condition.text}
//           </li>
//           <li>
//             <span id="s8">Max temperature:</span>
//             {forecast.forecast.forecastday[pos].day.maxtemp_c}&deg;C
//           </li>
//           <li>
//             <span id="s9">Max Wind</span>
//             {forecast.forecast.forecastday[pos].day.maxwind_kph} kph
//           </li>
//           <li>
//             <span id="s10">Chance Of Rain</span>
//             {forecast.forecast.forecastday[pos].day.daily_chance_of_rain}%
//           </li>
//         </ul>
//       </div>
//     );
//   });
//   return <div className="maindiv">{studentList}</div>;
// }*/
}
