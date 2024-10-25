import { useEffect, useState } from "react";

type weatherPopupProps = {
  weatherOpen: boolean,
}

const WeatherPopup = ({weatherOpen}: weatherPopupProps) => {
  const [getWeather, setGetWeather] = useState<any>(null);

  useEffect(() => {
    async function getWeatherData() {
      try {
        const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER}&q=Los Angeles&aqi=no`);
        const res = await data.json();
        setGetWeather(res);
      } catch (error) {
        console.log(error)
      }
    }
    getWeatherData();
  }, []);

  return (
    <>
      {
      getWeather ?
        <div
          className={`flex fixed left-1/2 -translate-x-1/2 bg-white border drop-shadow-button rounded-3xl transition-all duration-[.6s] z-20
          flex-col items-center justify-center py-6 w-80 ${weatherOpen ? 'top-0 opacity-1' : '-top-full opacity-0'}`}
        >
          <div className={`flex flex-col items-center justify-center transition-all duration-200 ${weatherOpen ? '' : ''}`}>
            <div className=" w-16">
              <img className="w-full" src={getWeather.current.condition.icon} alt={getWeather.current.condition.text} />
            </div>
            <p className="text-2xl text-black">{getWeather.current.condition.text}</p>
            <p className="text-black mt-3 text-5xl">{getWeather.current.temp_f}°</p>
          </div>
        </div>
        :
        null
      }
    </>
  )
};

export default WeatherPopup;