import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeFrameButtons from './components/TimeFrameButtons';
import TopItemsButtons from './components/TopItemsButtons';
import MainDisplay from './components/MainDisplay/MainDisplay';

function App() {
  const [timeFrame, setTimeFrame] = React.useState('short');
  const [itemType, setItemType] = React.useState('tracks');

  return (
    <div className="App">
    <TimeFrameButtons 
      timeFrame={timeFrame}
      setTimeFrame={setTimeFrame}/>
    <TopItemsButtons
      itemType={itemType}
      setItemType={setItemType}/>
    <MainDisplay
      timeFrame={timeFrame}
      itemType={itemType}/>
    </div>
  );
}

export default App;
