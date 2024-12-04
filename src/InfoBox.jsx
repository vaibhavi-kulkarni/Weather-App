import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ weatherAppInfo }) {
    const defaultImageUrl = "https://via.placeholder.com/345x140.png?text=No+Image"; // Default fallback image
    
    return (
        <div className="cardContainer">
            <div className="InfoBox">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherAppInfo.imageUrl || defaultImageUrl} // Use defaultImageUrl if imageUrl is undefined
                        title={weatherAppInfo.city} // Use weatherAppInfo.city
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherAppInfo.city} {/* Display city name */}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {weatherAppInfo.weather} {/* Display weather description */}
                        </Typography>
                        <Typography variant="body2">
                            <span>Temperature = {weatherAppInfo.temp}&deg;C</span><br />
                            <span>Humidity = {weatherAppInfo.humidity}</span><br />
                            <span>Temperature min = {weatherAppInfo.tempMin}&deg;C</span><br />
                            <span>Temperature max = {weatherAppInfo.tempMax}&deg;C</span><br />
                            <span>Weather can be described as <i>{weatherAppInfo.weather}</i> and feels like {weatherAppInfo.feelsLike}&deg;C</span><br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
