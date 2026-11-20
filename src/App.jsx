
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [myData, setMyData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    try {
      setLoading(true);
      setErrorMessage("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trimmedCity)}&units=metric&appid=19b15efc74b01eb7cc0574d85791c65c`
      );
      setMyData(response.data);
    } catch (error) {
      setMyData(null);
      if (error.response && error.response.status === 404) {
        setErrorMessage("City not found. Please try another name.");
      } else {
        setErrorMessage("Unable to fetch weather data right now.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={city}
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div>
        {loading && <p className="text-center">Loading...</p>}
        {!loading && errorMessage && (
          <p className="text-center text-danger">{errorMessage}</p>
        )}
      </div>

      {myData && myData.main && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>
                {myData.name}
                {myData.sys?.country ? `, ${myData.sys.country}` : ""}
              </p>
            </div>
            <div className="temp">
              <h1>{Math.round(myData.main.temp)}&deg;C</h1>
            </div>
            <div className="description">
              {myData.weather?.[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${myData.weather[0].icon}@2x.png`}
                  alt={myData.weather[0].description}
                />
              )}
              <h5>{myData.weather?.[0]?.description}</h5>
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              <p>{Math.round(myData.main.feels_like)}&deg;C</p>
              <p>Feels Like</p>
            </div>
            <div className="feels">
              <p>{myData.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="feels">
              <p>{Math.round(myData.wind?.speed ?? 0)} KPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;