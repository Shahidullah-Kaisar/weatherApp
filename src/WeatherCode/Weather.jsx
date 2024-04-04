import React, { useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import cloud_icon from '../assets/cloud.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({
        temperature: '0°C',
        humidity: '0°C',
        windSpeed: '0 Km/h',
        location: ''
    });

    const api_key = "a1125cdf8179ca7ee47dd2c16acba427";

    const search = async () => {
        let element = document.getElementsByClassName("cityInput")[0];
        if (element.value.trim() === "") {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        setWeatherData({
            temperature: `${data.main.temp}°C`,
            humidity: `${data.main.humidity}%`,
            windSpeed: `${data.wind.speed} km/h`,
            location: data.name
        });
    };

    return (
        <div className='container'>
            <div className="top_bar">
                <input type="text" className='cityInput' placeholder='Find City' />
                <div className='search_icon' onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="weather_img">
                <img src={cloud_icon} alt="" />
            </div>

            <div className='temp'>{weatherData.temperature}</div>
            <div className='location'>{weatherData.location}</div>

            <div className="data_container">
                <div className="element">
                    <img className='icon' src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity_percent">{weatherData.humidity}</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind_rate">{weatherData.windSpeed}</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;



// import React from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import cloud_icon from '../assets/cloud.png';
// import wind_icon from '../assets/wind.png';
// import humidity_icon from '../assets/humidity.png';

// const Weather = () => {
//     let api_key = "a1125cdf8179ca7ee47dd2c16acba427";

//     const search = async () => {
//         let element = document.getElementsByClassName("cityInput");
//         if (element[0].value.trim() === "") {
//             return 0;
//         }
        
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

//         let response = await fetch(url);
//         let data = await response.json();

//         let humidity = document.getElementsByClassName("humidity_percent");
//         let wind = document.getElementsByClassName("wind_rate");
//         let temperature = document.getElementsByClassName("temp");
//         let location = document.getElementsByClassName("location");

//         humidity[0].innerHTML = `${data.main.humidity}°C`;
//         wind[0].innerHTML = `${data.wind.speed} km/h`;
//         temperature[0].innerHTML = `${data.main.temp}°C`;
//         location[0].innerHTML = data.name;
//     }

//     return (
//         <div className='container'>
//             <div className="top_bar">
//                 <input type="text" className='cityInput' placeholder='Find City' />
//                 <div className='search_icon' onClick={() => { search() }}>
//                     <img src={search_icon} alt="" />
//                 </div>
//             </div>

//             <div className="weather_img">
//                 <img src={cloud_icon} alt="" />
//             </div>

//             <div className='temp'>25°C</div>
//             <div className='location'>Dhaka</div>

//             <div className="data_container">
//                 <div className="element">
//                     <img className='icon' src={humidity_icon} alt="" />
//                     <div className="data">
//                         <div className="humidity_percent">30°C</div>
//                         <div className='text'>Humidity</div>
//                     </div>
//                 </div>

//                 <div className="element">
//                     <img src={wind_icon} alt="" />
//                     <div className="data">
//                         <div className="wind_rate">18 km/h</div>
//                         <div className='text'>Wind Speed</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Weather;
