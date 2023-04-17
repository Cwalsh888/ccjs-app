export const convertTodaysData = (data) => {
  let result = [];

  if (data.length > 0) {
    console.log(data);
    result = data.map(ele => {
      const container = {};
      // Specify legacy shifts versus current shifts
      
      const setup = ele.jobs.find(ele => ele.name === 'set up')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const setupCar = ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const setupVan = ele.jobs.find(ele => ele.name === 'set up van driver')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftDriving = ele.jobs.find(ele => ele.name === 'driving')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftOTG = ele.jobs.find(ele => ele.name === 'otg')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const drivingFirstShift = ele.jobs.find(ele => ele.name === 'driving (first shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const otgFirstShift = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftDriving = ele.jobs.findLast(ele => ele.name === 'driving')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftOTG = ele.jobs.findLast(ele => ele.name === 'otg')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const drivingSecondShift = ele.jobs.find(ele => ele.name === 'driving (second shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const otgSecondShift = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdown = ele.jobs.find(ele => ele.name === 'breakdown')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdownCar = ele.jobs.find(ele => ele.name === 'breakdown car')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdownVan = ele.jobs.find(ele => ele.name === 'breakdown van driver')?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      
      const setupComments = ele.jobs.find(ele => ele.name === 'set up van driver')?.comments?.concat(ele.jobs.find(ele => ele.name === 'set up car (daily supply needs pickup)')?.comments);
      const shift1stComments = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.comments?.concat(ele.jobs.find(ele => ele.name === 'driving (first shift)')?.comments);
      const shift2ndComments = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.comments?.concat(ele.jobs.find(ele => ele.name === 'driving (second shift)')?.comments);
      const breakdownComments = ele.jobs.find(ele => ele.name === 'breakdownCar')?.comments?.concat(ele.jobs.find(ele => ele.name === 'breakdown van driver')?.comments); 

      const setupTime = ele.jobs.find(ele => ele.name === 'set up van driver')?.starthour + ":" + ele.jobs.find(ele => ele.name === 'set up van driver')?.startminute
      + " - " + ele.jobs.find(ele => ele.name === 'set up van driver')?.endhour + ":" + ele.jobs.find(ele => ele.name === 'set up van driver')?.endminute;
      const shift1stTime = ele.jobs.find(ele => ele.name === 'otg (first shift)')?.starthour + ":" + ele.jobs.find(ele => ele.name === 'otg (first shift)')?.startminute
      + " - " + ele.jobs.find(ele => ele.name === 'otg (first shift)')?.endhour + ":" + ele.jobs.find(ele => ele.name === 'otg (first shift)')?.endminute;
      const shift2ndTime = ele.jobs.find(ele => ele.name === 'otg (second shift)')?.starthour + ":" + ele.jobs.find(ele => ele.name === 'otg (second shift)')?.startminute
      + " - " + ele.jobs.find(ele => ele.name === 'otg (second shift)')?.endhour + ":" + ele.jobs.find(ele => ele.name === 'otg (second shift)')?.endminute;
      const breakdownTime = ele.jobs.find(ele => ele.name === 'breakdown van driver')?.starthour + ":" + ele.jobs.find(ele => ele.name === 'breakdown van driver')?.startminute
      + " - " + ele.jobs.find(ele => ele.name === 'breakdown van driver')?.endhour + ":" + ele.jobs.find(ele => ele.name === 'breakdown van driver')?.endminute;

      
      container.date = ele.edate ? ele.edate : null;
      container.setup = setup ? setup : null;
      container.setupCar = setupCar ? setupCar : null;
      container.setupVan = setupVan ? setupVan : null;
      container.setupComments = setupComments?.length > 0 ? setupComments : null;
      container.setupTime = setupTime ? setupTime : null;
      container.firstShiftDriver = firstShiftDriving ? firstShiftDriving : null;
      container.firstShiftOTG = firstShiftOTG ? firstShiftOTG : null;
      container.drivingFirstShift = drivingFirstShift ? drivingFirstShift : null;
      container.otgFirstShift = otgFirstShift ? otgFirstShift : null;
      container.shift1stComments = shift1stComments?.length > 0 ? shift1stComments : null;
      container.shift1stTime = shift1stTime ? shift1stTime : null;
      container.secondShiftDriver = secondShiftDriving ? secondShiftDriving : null;
      container.secondShiftOTG = secondShiftOTG ? secondShiftOTG : null;
      container.drivingSecondShift = drivingSecondShift ? drivingSecondShift : null;
      container.otgSecondShift = otgSecondShift ? otgSecondShift : null;
      container.shift2ndComments = shift2ndComments?.length > 0 ? shift2ndComments : null;
      container.shift2ndTime = shift2ndTime ? shift2ndTime : null;
      container.breakdown = breakdown ? breakdown : null;
      container.breakdownCar = breakdownCar ? breakdownCar : null;
      container.breakdownVan = breakdownVan ? breakdownVan : null;
      container.breakdownComments = breakdownComments?.length > 0 ? breakdownComments : null;
      container.breakdownTime = breakdownTime ? breakdownTime : null;

      return container;
    });
  }
 return result;
}
