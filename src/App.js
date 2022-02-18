import React from 'react';
import './App.css';

let hora = document.getElementById('hora');
let minute = document.getElementById('minute');

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
  window.location = window.location.href
}, 3000)

hora.style.transform = `rotate(${degHora()}deg)`
minute.style.transform = `rotate(${degMinute()}deg)`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date ()}
  }
  render() {
    return (
      <div>
        <p id="date" class="date">{this.state.date.toLocaleTimeString()}</p>
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
