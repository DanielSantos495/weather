import React from 'react';

class Main extends React.Component {

  render = () =>  {
// icon
// main
// description
// temperature
// cloudness
// humidity
// feels

     return(
       <div>
          <div>
            Today ({this.props.today})
          </div>
          <div>
            <div>City: {this.props.place}</div>
            <div>
              {this.props.icon === undefined ? <div>Loading...</div> :
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="Icon weather" />
                }
            </div>
            <div><strong>{this.props.main}</strong></div>
            <div>Description: {this.props.description}</div>
          </div>
          <div>Temperature: {this.props.temp}</div>
          <div>Cloudness: {this.props.clouds}</div>
          <div>Humidity: {this.props.humidity}</div>
          <div>Feels like {this.props.feels}</div>

        </div>
     );

  }

}

export default Main;