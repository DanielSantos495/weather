import React from 'react';

class Main extends React.Component {


  render = () =>  {

    // console.log(this.props.temp - 273.15)

     return(
       <section>

          <div className="container weather-current">
            <div className="weather-current__day">
              <h2>
                Today <span>({this.props.today})</span>
              </h2>
            </div>

            <div className="weather-current__content">

              <h3>{this.props.place}</h3>

             <div className="weather-current__descript">

              <div className="weather-current__descript-in">
                {this.props.icon === undefined ? <div>Loading...</div> :
                  <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="Icon weather" />
                  }

                <p>{this.props.main}</p>
                <p>{this.props.description}</p>
              </div>

              <div className="weather-current__feature">

                <p><span>Temperature: </span> <span>  {this.props.temp}° </span></p>
                <p><span>Cloudness:</span> <span>{this.props.clouds}%</span></p>
                <p><span>Humidity: </span> <span>{this.props.humidity}% </span></p>
                <p><span>Feels like</span> <span>{this.props.feels}°</span></p>

              </div>

             </div>

            </div>
          </div>

        </section>
     );

  }

}

export default Main;