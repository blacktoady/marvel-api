import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: [],
    };
  };
  componentDidMount() {
    fetch('https://gateway.marvel.com/v1/public/characters?limit=30&apikey=f2267e77554a545c2c11dea45e395a8f&ts=timestamp&hash=f1bd006096959266ebe76f0bb824ea65')
    .then(response => response.json())
    .then(current => this.setState({
      current: current.data.results
    }));
  }
  render() {
    const {current} = this.state;

    return(

      <div className='container'>

        <center>
        {current.map(data => 
            <div className={"hero" + data.id}> 
              <h2>{data.name}</h2>
              <img src={data.thumbnail.path + "." + data.thumbnail.extension}/>
            </div>   
          )}
        {console.log(current)} 
        </center>

      </div>
    )
  }
}
