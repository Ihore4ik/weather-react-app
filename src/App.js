import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";

const api = {
  base: 'http://api.openweathermap.org/data/2.5/',
  key: 'ec557bc234c13a13f926af8b9a1e3384'
};

function App() {
    const [responseData, setResponseData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getWeather = async (city) => {
        const data = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
            .then(res => {
                return res.json()
            });
        return setResponseData(data);
    };
    const inputHandler = (char) => {
        return setInputValue(char);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setResponseData(getWeather(inputValue));
        setInputValue("");
    };

    return (
        <div className="App">
            <div className="head">
                <h1>Weather App</h1>
                <Form inputValue={inputValue} inputHandler={inputHandler} submitHandler={submitHandler}/>
            </div>
            {responseData.length !==0 &&
            (responseData.cod === 200 ? <Weather responseData={responseData}/> : <h1>{responseData.message}</h1>)}
        </div>
    );
}

export default App;
