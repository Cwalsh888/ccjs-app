export const convertTodaysData = (data) => {
  if (data) {
    const result = {};
    
    const legacySetup = data.find((ele) => ele.name === "set up");
    const legacyFirstShiftOTG = data.find((ele) => ele.name === "otg");
    const legacyFirstShiftDrivers = data.find((ele) => ele.name === "driving");
    const legacySecondShiftDrivers = data.findLast((ele) => ele.name === "driving");
    const legacySecondShiftOTG = data.findLast((ele) => ele.name === "otg");
    const legacyBreakdown = data.find((ele) => ele.name === "breakdown");
    const setUpCar = data.find((ele) => ele.name === "set up car (daily supply needs pickup)");
    const setupVan = data.find((ele) => ele.name === "set up van driver");
    const firstShiftDrivers = data.find((ele) => ele.name === "driving (first shift)");
    const firstShiftOTG = data.find((ele) => ele.name === "otg (first shift)");
    const secondShiftDrivers = data.find((ele) => ele.name === "driving (second shift)");
    const secondShiftOTG = data.find((ele) => ele.name === "otg (second shift)");
    const breakdownCar = data.find((ele) => ele.name === "breakdown car");
    const breakdownVan = data.find((ele) => ele.name === "breakdown van driver");

    const legacySetupCount = legacySetup?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const legacyFirstShiftDriverCount =legacyFirstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const legacyFirstShiftOTGCount = legacyFirstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const legacySecondShiftDriverCount = legacySecondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const legacySecondShiftOTGCount = legacySecondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const legacyBreakdownCount = legacyBreakdown?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const setupCarCount = setUpCar?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const setupVanCount = setupVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const firstShiftDriverCount = firstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity,0);
    const firstShiftOTGCount = firstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const secondShiftDriverCount = secondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const secondShiftOTGCount = secondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const breakdownCarCount = breakdownCar?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const breakdownVanCount = breakdownVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);

    const setupComments = setupVan?.comments?.concat(setUpCar?.comments);
    const firstShiftComments = firstShiftOTG?.comments?.concat(firstShiftDrivers?.comments);
    const secondShiftComments = secondShiftOTG?.comments?.concat(secondShiftDrivers?.comments);
    const breakdownComments = breakdownCar?.comments?.concat(breakdownVan?.comments);

    const setupTime = (setupVan?.starthour % 12) + ":" + setupVan?.startminute.toString().padStart(2, "0") + " - " +
      (setupVan?.endhour % 12) + ":" + setupVan?.endminute.toString().padStart(2, "0");
    const firstShiftTime = (firstShiftOTG?.starthour % 12) + ":" + firstShiftOTG?.startminute.toString().padStart(2, "0") +
      " - " + (firstShiftOTG?.endhour % 12) + ":" + firstShiftOTG?.endminute.toString().padStart(2, "0");
    const secondShiftTime = (secondShiftOTG?.starthour % 12) + ":" + secondShiftOTG?.startminute.toString().padStart(2, "0") +
      " - " + (secondShiftOTG?.endhour % 12) + ":" + secondShiftOTG?.endminute.toString().padStart(2, "0");
    const breakdownTime = (breakdownVan?.starthour % 12) + ":" + breakdownVan?.startminute.toString().padStart(2, "0") +
      " - " + (breakdownVan?.endhour % 12) + ":" + breakdownVan?.endminute.toString().padStart(2, "0");

    result.legacySetupCount = legacySetupCount ? legacySetupCount : null;
    result.legacyFirstShiftDriverCount = legacyFirstShiftDriverCount ? legacyFirstShiftDriverCount : null;
    result.legacyFirstShiftOTGCount = legacyFirstShiftOTGCount ? legacyFirstShiftOTGCount: null;
    result.legacySecondShiftDriverCount = legacySecondShiftDriverCount ? legacySecondShiftDriverCount : null;
    result.legacySecondShiftOTGCount = legacySecondShiftOTGCount ? legacySecondShiftOTGCount : null;
    result.legacyBreakdownCount = legacyBreakdownCount ? legacyBreakdownCount : null;
    result.date = data[0].job_date ? data[0].job_date : null;
    result.setupCarCount = setupCarCount ? setupCarCount : null;
    result.setupVanCount = setupVanCount ? setupVanCount : null;
    result.setupComments = setupComments?.length > 0 ? setupComments : null;
    result.setupTime = setupTime ? setupTime : null;
    result.firstShiftDriverCount = firstShiftDriverCount ? firstShiftDriverCount : null;
    result.firstShiftOTGCount = firstShiftOTGCount ? firstShiftOTGCount : null;
    result.firstShiftComments = firstShiftComments?.length > 0 ? firstShiftComments : null;
    result.firstShiftTime = firstShiftTime ? firstShiftTime : null;
    result.secondShiftDriverCount = secondShiftDriverCount ? secondShiftDriverCount : null;
    result.secondShiftOTGCount = secondShiftOTGCount ? secondShiftOTGCount : null;
    result.secondShiftComments = secondShiftComments?.length > 0 ? secondShiftComments : null;
    result.secondShiftTime = secondShiftTime ? secondShiftTime : null;
    result.breakdownCarCount = breakdownCarCount ? breakdownCarCount : null;
    result.breakdownVanCount = breakdownVanCount ? breakdownVanCount : null;
    result.breakdownComments = breakdownComments?.length > 0 ? breakdownComments : null;
    result.breakdownTime = breakdownTime ? breakdownTime : null;

    return result;
  }
};
