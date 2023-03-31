import { useEffect, useState } from 'react';
import { Card, CardBox, Container } from './styled';

const Homepage = () => {
  // To-do:
  // 1. Figure out how to have backend local server up forever for real site.
  // 2. Gonna need a loading spinner for all these slow api calls

  let [data, setData] = useState([]);
  let [newData, setNewData] = useState([]);
  let [todaysData, setTodaysData] = useState({});

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
   }, [newData]);

  return (
    <Container>
      <div>
        Today's date is {todaysData?.date}
      </div>
      <CardBox>
        <Card>
          We have {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks on setup!
        </Card>
        <Card>
          We have {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks on 1st shift! 
        </Card>
        <Card>
          We have {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks on 2nd shift!
        </Card>
        <Card>
          We have {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks on breakdown!
        </Card>
      </CardBox>
    </Container>
  );
}

export default Homepage;
