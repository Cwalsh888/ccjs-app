import { useEffect, useState } from 'react';
import { Container, NavigationBox, NavButton } from './styled';
import CurrentInfo from '../Pages/CurrentInfo';
import Historical from '../Pages/Historical';
import FunFacts from '../Pages/FunFacts';
import About from '../Pages/About';

const Main = () => {
  // To-do:
  // 1. Figure out how to have backend local server up forever for real site.
  // 2. Gonna need a loading spinner for all these slow api calls

  let [data, setData] = useState([]);
  let [newData, setNewData] = useState([]);
  let [todaysData, setTodaysData] = useState({});
  let [page, setPage] = useState('currentInfo');

  const date = new Date();

  let day = date.getDate();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();

  let today = `${year}-${month}-${day}`;

  useEffect(() => {
    fetch(`http://localhost:5000/getData`)
     .then(response => response.json())
     .then(result => setData(result.data))
     .catch(error => console.log(error.message));
  }, []);

  useEffect(() => {
    console.log(data);
    if (data.length > 0) {
      setNewData(data.map(ele => {
        const container = {};

        let setup = ele.jobs.find(ele => ele.name === 'set up')?.jobassignments.length;
        let setupCar = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)')?.jobassignments.length;
        let setupVan = ele.jobs.find(ele => ele.name === 'set up van driver')?.jobassignments.length;
        let firstShiftDriving = ele.jobs.find(ele => ele.name === 'driving')?.jobassignments.length;
        let firstShiftOTG = ele.jobs.find(ele => ele.name === 'otg')?.jobassignments.length;
        let drivingFirstShift = ele.jobs.find(ele => ele.name === 'driving (first shift)')?.jobassignments.length;
        let otgFirstShift = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.jobassignments.length;
        let secondShiftDriving = ele.jobs.findLast(ele => ele.name === 'driving')?.jobassignments.length;
        let secondShiftOTG = ele.jobs.findLast(ele => ele.name === 'otg')?.jobassignments.length;
        let drivingSecondShift = ele.jobs.find(ele => ele.name === 'driving (second shift)')?.jobassignments.length;
        let otgSecondShift = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.jobassignments.length;
        let breakdown = ele.jobs.find(ele => ele.name === 'breakdown')?.jobassignments.length;
        let breakdownCar = ele.jobs.find(ele => ele.name === 'breakdown car')?.jobassignments.length;
        let breakdownVan = ele.jobs.find(ele => ele.name === 'breakdown van driver')?.jobassignments.length;
        let fullDay = (firstShiftDriving + firstShiftOTG >= 2 || drivingFirstShift + otgFirstShift >= 2) &&
                      (secondShiftDriving + secondShiftOTG >= 2 || drivingSecondShift + otgSecondShift >= 2)

        container.date = ele.edate;
        container.setup = setup;
        container.setupCar = setupCar;
        container.setupVan = setupVan;
        container.firstShiftDriver = firstShiftDriving;
        container.firstShiftOTG = firstShiftOTG;
        container.drivingFirstShift = drivingFirstShift;
        container.otgFirstShift = otgFirstShift;
        container.secondShiftDriver = secondShiftDriving;
        container.secondShiftOTG = secondShiftOTG;
        container.drivingSecondShift = drivingSecondShift;
        container.otgSecondShift = otgSecondShift;
        container.breakdown = breakdown;
        container.breakdownCar = breakdownCar;
        container.breakdownVan = breakdownVan;
        container.fullDay = fullDay;

        return container;
      }));
    }
  }, [data]);

  useEffect(() => {
    if (newData) {
      // console.log(newData);
      setTodaysData(newData.find(item => item.date === today));
    }
  }, [newData, today]);

  
  return (
    <Container>   
      {(() => {
        switch (page) {
          case 'currentInfo':
            return <CurrentInfo todaysData={todaysData} />
          case 'historical':
            return <Historical newData={newData} />
          case 'funFacts':
            return <FunFacts todaysData={todaysData} />
          case 'about':
            return <About todaysData={todaysData} />
          default:
            return null
        }
      })()}
      <NavigationBox>
        <NavButton onClick={() => setPage('currentInfo')}>
          First button.
        </NavButton>
        <NavButton onClick={() => setPage('historical')}>
          Second button.
        </NavButton>
        <NavButton onClick={() => setPage('funFacts')}>
          Third button.
        </NavButton>
        <NavButton onClick={() => setPage('about')}>
          Fourth button.
        </NavButton>
      </NavigationBox>
    </Container>
  );
}

export default Main;
