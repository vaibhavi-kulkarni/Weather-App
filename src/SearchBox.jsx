import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateWeather }) {
    let [city, setCity] = useState("");
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_token = import.meta.env.VITE_API_TOKEN;

    const hot_url = "https://images.pexels.com/photos/35778/tree-avenue-back-light-sun.jpg";
    const cold_url = "https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg";
    const rainy_url = "https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg";

    // Fetch weather data
    let getWeather = async () => {
        let res = await fetch(`${api_url}?q=${city}&appid=${api_token}&units=metric`);
        let data = await res.json();
        if (data.main) { // Make sure the response contains weather data
            let result = {
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
                city: data.name, // Get city name from response
                imageUrl: data.main.temp > 15 ? hot_url : (data.main.temp < 5 ? cold_url : rainy_url) // Add image URL logic
            };
            updateWeather(result); // Pass result to update parent state
        }
    };

    // Handle input change
    let handleChange = (event) => {
        setCity(event.target.value);
    };

    // Handle form submission
    let handleSubmit = (event) => {
        event.preventDefault();
        getWeather(); // Call getWeather on form submission
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <h4>Search for the city:</h4>
                <TextField
                    id="outlined-basic"
                    label="City name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <Button className="SearchBox" type="submit" variant="contained">
                    Search
                </Button>
            </form>
        </div>
    );
}
