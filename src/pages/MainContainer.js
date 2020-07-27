import React from 'react';

import NextDaysWeather from '../components/NextDaysWeather';
import Main from './Main';
// import Search from '../components/Search';


class MainContainer extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      data: {
        current: {
          weather: ['']
        },
      },
      date: '',
      nextDays: [],
      nextWeather: [],
      valueFrom:  '',
      loading: false,
    };

  }

  componentDidMount = () => {

    this.geolocation(this.location);
    this.nextDays()

  }

  geolocation = async position => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position);

    } else {

      console.log('Your browser not support geolocation');

    }

  }

  location = async position => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    await this.getData(lat, lon);

  }

  getData = async (lat, lon) => {

    this.setState({loading: true});

    const latitude = lat;
    const longitude = lon;
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}`;
    const API_KEY = `c196bcdce7bad59b552b30dbfefd9b2b`;

    try {

      const response = await fetch(`${API_URL}&appid=${API_KEY}`);
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
        date: this.weatherDate(),
        nextWeather: data.daily.slice(1, 7),
      });

    } catch(error) {
      console.log(error.message);
    }
  }

  weatherDate = () => {

    const weatherDate = new Date();
    const days = weatherDate.getDay();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
    return week[days];
  }
  nextDays = () => {

    let nextDays = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];

    switch(this.weatherDate()) {
      case 'Sunday':
        nextDays = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
        break;
      case 'Monday':
        nextDays = ['Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        break;
      case 'Tuesday':
        nextDays = ['Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
        break;
      case 'Wednessday':
        nextDays = ['Thursday', 'Friday', 'Saturday', 'Sunday','Monday', 'Tuesday']
        break;
      case 'Thursday':
        nextDays = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednessday']
        break;
      case 'Friday':
        nextDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday']
        break;
      case 'Saturday':
        nextDays = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday']
        break;
      default:
        console.log('No sé que día es hoy');
    }

    this.setState({nextDays: nextDays})

  }

  render = () => {

    console.log(this.state.data);
    const nextDays = this.state.nextDays;
    const nextWeather = this.state.nextWeather;

    const weather = this.state.data.current.weather[0];
    const current = this.state.data.current;
    const place = this.state.data.timezone;

    if (this.state.loading) {
      return <div>Loading...</div>
    }

    return(

          <div>

            <Main
              today={this.state.date}
              place={place}
              icon={weather.icon}
              main={weather.main}
              description={weather.description}
              temp={current.temp}
              clouds={current.clouds}
              humidity={current.humidity}
              feels={current.feels_like}

             />

            <NextDaysWeather
              day={nextDays}
              nextWeather={nextWeather}
            />

          </div>


    );

  }
}

export default MainContainer;