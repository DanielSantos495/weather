import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lon: null,
    }
  }

  componentDidMount = () => {


  }


  render = () => {

    return(
      <form action="" onSubmit={this.props.onSubmit}>
        <input type="text" onChange={this.props.onChange}/>
      </form>
    )
  }
}

export default Search;