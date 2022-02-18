import React from 'react';
import './App.css';

const degHora = () => {
  let date = new Date();
  let hour = date.getHours();
  let deg = 30 * hour + 270;
  return deg;
}


const degMinute = () => {
  let date = new Date();
  let min = date.getMinutes();
  let deg = 6 * min + 270;
  return deg;
}

setInterval(() => {
  degHora()
}, 1000)

setInterval(() => {
  degMinute()
}, 1000)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date ()}
  }
  render() {
    const myStyleHour = {
      transform: `rotate(${degHora()}deg)`
    }
    const myStyleMinute = {
      transform: `rotate(${degMinute()}deg)`
    }
    return (
      <div className="clock-box">
        <div className="clock">
          <div className='points'>
            <p className='point-12'>12</p>
            <p className='point-3'>3</p>
            <p className='point-6'>6</p>
            <p className='point-9'>9</p>
          </div>
          <div className="hora" id="hora" style={myStyleHour}></div>
          <div className="minute" id="minute" style={myStyleMinute}></div>
        </div>
          <div id="actuall-data">
          <p id="date" className="date">{this.state.date.toLocaleTimeString()}</p>
          </div>
      </div>
    )
  }
  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({date: new Date()})
    }, oneSecond)
  }
}

export default App;
