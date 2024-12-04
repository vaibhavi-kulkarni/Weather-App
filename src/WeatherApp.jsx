import { useState } from 'react'; // Add this import statement
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
    const [weatherAppInfo, setWeatherAppInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    // Function to update weather data
    const updateWeather = (data) => {
        setWeatherAppInfo(data);
    };

    return (
        <>
            <SearchBox updateWeather={updateWeather} />
            <InfoBox weatherAppInfo={weatherAppInfo} />
        </>
    );
}
