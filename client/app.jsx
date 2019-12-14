import React from 'react';
import Wrapper from './styled-components/wrapper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const d = new Date();
    const totalMinutes = (d.getHours() * 60) + d.getMinutes();
    let background = '';
    if (totalMinutes < 360 || totalMinutes >= 900) {
      document.body.style.background = '#1b1b1d';
    } else {
      document.body.style.background = 'white';
    }
  }
  render() {
    return (
      <Wrapper.Global>
        <Wrapper.Navbar id="Navbar"></Wrapper.Navbar>
        <Wrapper.Body>
          <Wrapper.FirstColumn>
            <Wrapper.Graph id="Graph"></Wrapper.Graph>
            <Wrapper.About id="About"></Wrapper.About>
            <Wrapper.ModalRoot id='modal-root'></Wrapper.ModalRoot>
            <Wrapper.News id="News"></Wrapper.News>
            <Wrapper.Ratings id="Ratings"></Wrapper.Ratings>
            <Wrapper.Earnings id="Earnings"></Wrapper.Earnings>
            <Wrapper.TradeStock id="Tradestock"></Wrapper.TradeStock>
          </Wrapper.FirstColumn>
        </Wrapper.Body>
      </Wrapper.Global>
    )
  }
}

export default App;
