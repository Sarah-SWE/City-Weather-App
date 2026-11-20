# City Weather App

City Weather App is a responsive front-end weather web application built with React and Bootstrap. It allows users to search for any city by name and view current weather metrics including temperature, weather description, icon, feels-like temperature, humidity, and wind speed.

## Features
- Search weather by city name with `Enter` key support and input validation
- Display current temperature in Celsius along with weather condition description and icon
- Show additional weather details: **Feels Like**, **Humidity**, and **Wind Speed**
- Handle loading states and error feedback (such as invalid city names or network errors)
- Responsive UI styled with Bootstrap and custom CSS

## Tech Stack
**Frontend:** React, Bootstrap, Axios, CSS3  
**API:** OpenWeatherMap API

## Getting Started

### Prerequisites
- Node.js & npm installed on your machine
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation & Setup
```bash
git clone [https://github.com/Sarah-SWE/your-repo-name.git](https://github.com/Sarah-SWE/your-repo-name.git)
cd your-repo-name
npm install


├── public/
├── src/
│   ├── App.js            # Main component with search logic & weather display
│   ├── App.css           # Custom layout & styling
│   └── index.js          # App entry point
└── package.json
