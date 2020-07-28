import React from 'react';

class NextDaysWeather extends React.Component {

  convertKelvinToCent = temp =>  {
    const rest = temp - 273.15;
    if (rest % 1 === 0) {
      return rest
    } else {
      return rest.toFixed(1);
    }
  }


  render = () => {

    const nextDays = this.props.day;
    const nextWeather = this.props.nextWeather;

    return(
      <section>
        <div className="container weather-next">

          {nextWeather.map((day, i) => {

            return(


                  <article key={i} className="weather-next__article">
                    <div className="weather-next__article-day">
                      <h3>{nextDays[i]}</h3>
                    </div>

                    {day.weather[0].icon === undefined ? <div>Loading...</div> :
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Icon weather" /> }

                    <div className="weather-next__description">
                      <p>{day.weather[0].main}</p>
                      <span></span>
                      <p>{this.convertKelvinToCent(day.temp.day)}°</p>
                    </div>
                  </article>

            )

          })

          }

        </div>
      </section>
    );

  }
}

export default NextDaysWeather;