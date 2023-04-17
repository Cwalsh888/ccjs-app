export const convertTodaysData = (data) => {
  let result = [];

  if (data.length > 0) {
    console.log(data);
    result = data.map(ele => {
      const container = {};

      const legacySetup  = ele.jobs.find(ele => ele.name === 'set up');
      const legacyFirstShiftOTG = ele.jobs.find(ele => ele.name === 'otg');
      const legacyFirstShiftDrivers = ele.jobs.find(ele => ele.name === 'driving');
      const legacySecondShiftDrivers = ele.jobs.findLast(ele => ele.name === 'driving');
      const legacySecondShiftOTG = ele.jobs.findLast(ele => ele.name === 'otg');
      const legacyBreakdown = ele.jobs.find(ele => ele.name === 'breakdown');
      const setUpCar = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)');
      const setupVan = ele.jobs.find(ele => ele.name === 'set up van driver');
      const firstShiftDrivers = ele.jobs.find(ele => ele.name === 'driving (first shift)');
      const firstShiftOTG = ele.jobs.find(ele => ele.name === 'otg (first shift)');
      const secondShiftDrivers = ele.jobs.find(ele => ele.name === 'driving (second shift)');
      const secondShiftOTG = ele.jobs.find(ele => ele.name === 'otg (second shift)');
      const breakdownCar = ele.jobs.find(ele => ele.name === 'breakdown car');
      const breakdownVan = ele.jobs.find(ele => ele.name === 'breakdown van driver');
      
      const legacySetupCount = legacySetup?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacyFirstShiftDriverCount = legacyFirstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacyFirstShiftOTGCount = legacyFirstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftDriverCount = legacySecondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftOTGCount = legacySecondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacyBreakdownCount = legacyBreakdown?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const setupCarCount = setUpCar?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const setupVanCount = setupVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftDriverCount = firstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftOTGCount = firstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftDriverCount = secondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftOTGCount = secondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdownCarCount = breakdownCar?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdownVanCount = breakdownVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      
      const setupComments = setupVan?.comments?.concat(setUpCar?.comments);
      const firstShiftComments = firstShiftOTG?.comments?.concat(firstShiftDrivers?.comments);
      const secondShiftComments = secondShiftOTG?.comments?.concat(secondShiftDrivers?.comments);
      const breakdownComments = breakdownCar?.comments?.concat(breakdownVan?.comments); 

      const setupTime = setupVan?.starthour % 12 + ":" + setupVan?.startminute.toString().padStart(2, '0')
      + " - " + setupVan?.endhour % 12 + ":" + setupVan?.endminute.toString().padStart(2, '0');
      const firstShiftTime = firstShiftOTG?.starthour % 12 + ":" + firstShiftOTG?.startminute.toString().padStart(2, '0')
      + " - " + firstShiftOTG?.endhour % 12 + ":" + firstShiftOTG?.endminute.toString().padStart(2, '0');
      const secondShiftTime = secondShiftOTG?.starthour % 12 + ":" + secondShiftOTG?.startminute.toString().padStart(2, '0')
      + " - " + secondShiftOTG?.endhour % 12 + ":" + secondShiftOTG?.endminute.toString().padStart(2, '0');
      const breakdownTime = breakdownVan?.starthour % 12 + ":" + breakdownVan?.startminute.toString().padStart(2, '0')
      + " - " + breakdownVan?.endhour % 12 + ":" + breakdownVan?.endminute.toString().padStart(2, '0');

      container.legacySetupCount = legacySetupCount ? legacySetupCount : null;
      container.legacyFirstShiftDriverCount = legacyFirstShiftDriverCount ? legacyFirstShiftDriverCount : null;
      container.legacyFirstShiftOTGCount = legacyFirstShiftOTGCount ? legacyFirstShiftOTGCount : null;
      container.legacySecondShiftDriverCount = legacySecondShiftDriverCount ? legacySecondShiftDriverCount : null;
      container.legacySecondShiftOTGCount = legacySecondShiftOTGCount ? legacySecondShiftOTGCount : null;
      container.legacyBreakdownCount = legacyBreakdownCount ? legacyBreakdownCount : null;
      container.date = ele.edate ? ele.edate : null;
      container.setupCarCount = setupCarCount ? setupCarCount : null;
      container.setupVanCount = setupVanCount ? setupVanCount : null;
      container.setupComments = setupComments?.length > 0 ? setupComments : null;
      container.setupTime = setupTime ? setupTime : null;
      container.firstShiftDriverCount = firstShiftDriverCount ? firstShiftDriverCount : null;
      container.firstShiftOTGCount = firstShiftOTGCount ? firstShiftOTGCount : null;
      container.firstShiftComments = firstShiftComments?.length > 0 ? firstShiftComments : null;
      container.firstShiftTime = firstShiftTime ? firstShiftTime : null;
      container.secondShiftDriverCount = secondShiftDriverCount ? secondShiftDriverCount : null;
      container.secondShiftOTGCount = secondShiftOTGCount ? secondShiftOTGCount : null;
      container.secondShiftComments = secondShiftComments?.length > 0 ? secondShiftComments : null;
      container.secondShiftTime = secondShiftTime ? secondShiftTime : null;
      container.breakdownCarCount = breakdownCarCount ? breakdownCarCount : null;
      container.breakdownVanCount = breakdownVanCount ? breakdownVanCount : null;
      container.breakdownComments = breakdownComments?.length > 0 ? breakdownComments : null;
      container.breakdownTime = breakdownTime ? breakdownTime : null;

      return container;
    });
  }
 return result;
}
