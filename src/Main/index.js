import { useEffect, useState } from 'react';
import { Container, PageContainer, Title, NavigationBox, NavButton } from './styled';
import CurrentInfo from '../Pages/CurrentInfo';
import Historical from '../Pages/Historical';
import FunFacts from '../Pages/FunFacts';
import About from '../Pages/About';

const Main = () => {
  // To-do:
  // 1. Gonna need a loading spinner for all these slow api calls

  let [data, setData] = useState([]);
  let [newData, setNewData] = useState([]);
  let [todaysData, setTodaysData] = useState({});
  let [page, setPage] = useState('currentInfo');

  const date = new Date();

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();

  let today = `${year}-${month}-${day}`;

  useEffect(() => {
    fetch(`https://ccjs-server.onrender.com/getData`)
     .then(response => response.json())
     .then(result => setData(result.data))
     .catch(error => console.log(error.message));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setNewData(data.map(ele => {
        const container = {};
        // Specify legacy shifts versus cureent shifts

        let setup = ele.jobs.find(ele => ele.name === 'set up')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let setupCar = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let setupVan = ele.jobs.find(ele => ele.name === 'set up van driver')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let firstShiftDriving = ele.jobs.find(ele => ele.name === 'driving')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let firstShiftOTG = ele.jobs.find(ele => ele.name === 'otg')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let drivingFirstShift = ele.jobs.find(ele => ele.name === 'driving (first shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let otgFirstShift = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let secondShiftDriving = ele.jobs.findLast(ele => ele.name === 'driving')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let secondShiftOTG = ele.jobs.findLast(ele => ele.name === 'otg')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let drivingSecondShift = ele.jobs.find(ele => ele.name === 'driving (second shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let otgSecondShift = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let breakdown = ele.jobs.find(ele => ele.name === 'breakdown')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let breakdownCar = ele.jobs.find(ele => ele.name === 'breakdown car')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        let breakdownVan = ele.jobs.find(ele => ele.name === 'breakdown van driver')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
        
        let shift1stComments = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.comments?.concat(ele.jobs.find(ele => ele.name === 'driving (first shift)')?.comments);
        let shift2ndComments = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.comments?.concat(ele.jobs.find(ele => ele.name === 'driving (second shift)')?.comments);
        let setupComments = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)')?.comments?.concat(ele.jobs.find(ele => ele.name === 'set up van driver')?.comments);
        let breakdownComments = ele.jobs.find(ele => ele.name === 'breakdownCar')?.comments?.concat(ele.jobs.find(ele => ele.name === 'breakdown van driver')?.comments);

        let halfDay = (firstShiftDriving + firstShiftOTG >= 2 || drivingFirstShift + otgFirstShift >= 2) ||
                      (secondShiftDriving + secondShiftOTG >= 2 || drivingSecondShift + otgSecondShift >= 2);
        let fullDay = (firstShiftDriving + firstShiftOTG >= 2 || drivingFirstShift + otgFirstShift >= 2) &&
                      (secondShiftDriving + secondShiftOTG >= 2 || drivingSecondShift + otgSecondShift >= 2);    


        container.date = ele.edate ? ele.edate : null;
        container.setup = setup ? setup : null;
        container.setupCar = setupCar ? setupCar : null;
        container.setupVan = setupVan ? setupVan : null;
        container.setupComments = setupComments?.length > 0 ? setupComments : null;
        container.firstShiftDriver = firstShiftDriving ? firstShiftDriving : null;
        container.firstShiftOTG = firstShiftOTG ? firstShiftOTG : null;
        container.drivingFirstShift = drivingFirstShift ? drivingFirstShift : null;
        container.otgFirstShift = otgFirstShift ? otgFirstShift : null;
        container.shift1stComments = shift1stComments?.length > 0 ? shift1stComments : null;
        container.secondShiftDriver = secondShiftDriving ? secondShiftDriving : null;
        container.secondShiftOTG = secondShiftOTG ? secondShiftOTG : null;
        container.drivingSecondShift = drivingSecondShift ? drivingSecondShift : null;
        container.otgSecondShift = otgSecondShift ? otgSecondShift : null;
        container.shift2ndComments = shift2ndComments?.length > 0 ? shift2ndComments :null;
        container.breakdown = breakdown ? breakdown : null;
        container.breakdownCar = breakdownCar ? breakdownCar : null;
        container.breakdownVan = breakdownVan ? breakdownVan : null;
        container.breakdownComments = breakdownComments?.length > 0 ? breakdownComments : null;
        container.halfDay = halfDay ? halfDay : null;
        container.fullDay = fullDay ? fullDay : null;

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
      <Title>
        Project CCJS
      </Title>
      <PageContainer>   
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
      </PageContainer>
      <NavigationBox>
        <NavButton onClick={() => setPage('currentInfo')}>
          Today's Info
        </NavButton>
        <NavButton onClick={() => setPage('historical')}>
          Past Data
        </NavButton>
        <NavButton onClick={() => setPage('funFacts')}>
          Fun Facts
        </NavButton>
        <NavButton onClick={() => setPage('about')}>
          About 
        </NavButton>
      </NavigationBox>
    </Container>
  );
}

export default Main;
