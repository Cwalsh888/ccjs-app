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
    if (data.length > 0) {
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
    }
  }, [data]);

  useEffect(() => {
    if (newData) {
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
            return <Historical todaysData={todaysData} />
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
