// export default App;
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Current from "./current";
import Forcast from "./forcast";

function App() {
  const [city, setCity] = useState("");
  const [auto, setAuto] = useState([]);
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [forcast, setForcast] = useState();
  const forecastSectionRef = useRef(null);

  function handle(ele) {
    if (forecastSectionRef.current) {
      forecastSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    let ar = ele.split(",");
    setCity(ar[0]);
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9ec06796b6b24e7482681929231903&q=${city}&days=7&aqi=no&alerts=yes`
      )
      .then((res) => {
        setCity(ele);
        setCurrent(res.data.current);
        setForcast(res.data.forecast);
        setLocation(res.data.location);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  useEffect(() => {
    async function get() {
      await axios
        .get(
          `https://api.weatherapi.com/v1/search.json?key=9ec06796b6b24e7482681929231903&q=${city}&days=7&aqi=yes&alerts=yes`
        )
        .then((res) => {
          const autocomplete = res.data.map((data) => {
            return `${data.name},${data.region},${data.country}`;
          });
          setAuto(autocomplete);
        });
    }
    get();
  }, [city]);

  const [isVisible, setIsVisible] = useState(false);

  function handlechange(e) {
    setCity(e.target.value);
    if (e.target.value) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <div className="App bg-[url('./Images/black-white-sunset.jpg')] bg-cover bg-no-repeat h-screen">
      <section className="h-full">
        <div className="w-[100%] flex flex-col items-center gap-10">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Weather
            </span>{" "}
            App
          </h1>
          <div className="relative w-full max-w-[70vw] sm:max-w-[40vw]">
            <input
              type="text"
              className="p-5 pl-16 w-full rounded-tl-2xl rounded-tr-2xl border-2 border-gray-300 bg-gray-900 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-white"
              placeholder="Search City..."
              onChange={(e) => handlechange(e)}
            />
            <svg
              className="w-7 h-8 absolute left-5 top-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            {isVisible && (
              <div className="rounded-bl-xl rounded-br-xl border-b-2 border-l-2 border-r-2 pl-[3%] pt-2 w-full max-h-[40vh] overflow-y-auto  bg-gray-900 border-collapse2 border-teal-500 ">
                {auto.map((data1) => {
                  return (
                    <div
                      className="w-[98%] flex justify-center item-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm sm:text-xl px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
                      onClick={() => {
                        handle(data1);
                      }}
                    >
                      <span>
                        <svg
                          class="stroke-current w-4 h-4 left-2 top-2 sm:w-7 sm:h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <p className="pl-[2%] overflow-auto">{data1}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
      {forcast && current ? (
        <section
          className="bg-[url('./Images/second.jpg')] bg-cover bg-no-repeat h-screen"
          ref={forecastSectionRef}
        >
          {/* <h1>hello</h1> */}
          <div className="flex flex-col justify-center items-center pt-[1%] pb-[2%]  text-white">
            <h1 class="flex items-center text-3xl sm:text-5xl font-sans dark:text-white">
              Weather
              <span class="bg-blue-100 text-blue-800 text-xl sm:text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                Current
              </span>
            </h1>
            {current && <Current current={current} city={location} />}
          </div>
          <h1 class="flex items-center justify-center text-3xl sm:text-5xl font-sans dark:text-white pb-[3%] sm:pb-[1%]">
            Weather
            <span class="bg-blue-100 text-blue-800  text-xl sm:text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              Forecast
            </span>
          </h1>
          <div className="flex overflow-auto gap-14 sm:gap-6 justify-center pl-28 sm:pl-0  text-white">
            {/* {forcast && <Forcast forecast={forcast} />} */}
            {console.log(forcast)}
            {forcast &&
              forcast.forecastday.map((data, pos) => {
                return <Forcast forecast={data} key={pos} />;
              })}
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
