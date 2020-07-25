import React from 'react';

class NextDaysWeather extends React.Component {


  render = () => {

    const nextDays = this.props.day;
    const nextWeather = this.props.nextWeather;

    return(
      <div>

          {nextWeather.map((day, i) => {

            return(


                  <div key={i}>
                    <div>{nextDays[i]}</div>

                    <div>
                    {day.weather[0].icon === undefined ? <div>Loading...</div> :
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Icon weather" /> }
                    </div>
                    <div>{day.weather[0].main}</div>
                    <div>{day.temp.day}°</div>
                  </div>

            )

          })

          }

      </div>
    );

  }
}

export default NextDaysWeather;