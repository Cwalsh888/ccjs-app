import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [data, setData] = useState([]);
  let [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getData`)
     .then(response => response.json())
     .then(result => setData(result.data))
     .catch(error => console.log(error.message));
   }, []);

   useEffect(() => {
    if (data.length > 0) {
      // console.log(data);
      setNewData(data.map(ele => {
        const container = {};

        let setup = ele.jobs.find(ele => ele.name === 'set up');
        let setupCar = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)');
        let setupVan = ele.jobs.find(ele => ele.name === 'set up van driver');
        let firstShiftDriving = ele.jobs.find(ele => ele.name === 'driving');
        let firstShiftOTG = ele.jobs.find(ele => ele.name === 'otg');
        let drivingFirstShift = ele.jobs.find(ele => ele.name === 'driving (first shift)');
        let otgFirstShift = ele.jobs.find(ele => ele.name === 'otg (first shift)');
        let secondShiftDriving = ele.jobs.findLast(ele => ele.name === 'driving');
        let secondShiftOTG = ele.jobs.findLast(ele => ele.name === 'otg');
        let drivingSecondShift = ele.jobs.find(ele => ele.name === 'driving (second shift)');
        let otgSecondShift = ele.jobs.find(ele => ele.name === 'otg (second shift)');
        let breakdown = ele.jobs.find(ele => ele.name === 'breakdown');
        let breakdownCar = ele.jobs.find(ele => ele.name === 'breakdown car');
        let breakdownVan = ele.jobs.find(ele => ele.name === 'breakdown van driver');

        container.date = ele.edate;
        container.setup = setup?.jobassignments.length;
        container.setupCar = setupCar?.jobassignments.length;
        container.setupVan = setupVan?.jobassignments.length;
        container.firstShiftDriver = firstShiftDriving?.jobassignments.length;
        container.firstShiftOTG = firstShiftOTG?.jobassignments.length;
        container.drivingFirstShift = drivingFirstShift?.jobassignments.length;
        container.otgFirstShift = otgFirstShift?.jobassignments.length;
        container.secondShiftDriver = secondShiftDriving?.jobassignments.length;
        container.secondShiftOTG = secondShiftOTG?.jobassignments.length;
        container.drivingSecondShift = drivingSecondShift?.jobassignments.length;
        container.otgSecondShift = otgSecondShift?.jobassignments.length;
        container.breakdown = breakdown?.jobassignments.length;
        container.breakdownCar = breakdownCar?.jobassignments.length;
        container.breakdownVan = breakdownVan?.jobassignments.length;

        return container;
      }));
      console.log(newData);
    }
   }, [data])

  // Have all the data sent over now!
  // Just need to work on displaying it!
  // Yaaaayyy!

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Let's see how fast this updates. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
