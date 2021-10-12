import React from "react";

const Weather = ({responseData}) => {
const imgSource = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`
}
    return (

          <div className="weather">
            <div className="picture">
                <img src={imgSource(responseData.weather[0].icon)} alt=""/>
                <p>{responseData.weather[0].description}</p>
                {/*<img src={`${responseData.weather[0].icon}.png`} alt=""/>*/}
                {/*<img src={responseData.weather[0].icon} alt=""/>*/}
            </div>
            <div className="describe">
                <ul>
                    <li>City: <span>{responseData.name}</span></li>
                    <li>Temperature: <span>{responseData.main.temp} &#8451;</span></li>
                    <li>Humidity: <span>67 %</span></li>
                    <li>Pressure: <span>{responseData.main.pressure} mm</span></li>
                    <li>Visibility: <span>{responseData.visibility/1000} km</span></li>
                </ul>
            </div>
        </div>



)
};

export default Weather;



