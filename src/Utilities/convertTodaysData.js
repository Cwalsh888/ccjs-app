export const convertTodaysData = (data) => {
  if (data) {
    const result = [];
    const setup = {};
    const firstShift = {};
    const secondShift = {};
    const breakdown = {};

    const setUpCar = data.find((shift) => shift.name === "set up car (daily supply needs pickup)");
    const setupVan = data.find((shift) => shift.name === "set up van driver") ? data.find((shift) => shift.name === "set up van driver") : null;
    const firstShiftDrivers = data.find((shift) => shift.name === "driving (first shift)");
    const firstShiftOTG = data.find((shift) => shift.name === "otg (first shift)");
    const secondShiftDrivers = data.find((shift) => shift.name === "driving (second shift)");
    const secondShiftOTG = data.find((shift) => shift.name === "otg (second shift)");
    const breakdownCar = data.find((shift) => shift.name === "breakdown car");
    const breakdownVan = data.find((shift) => shift.name === "breakdown van driver") ? data.find((shift) => shift.name === "breakdown van driver") : null;
    
    const setupVanCount = setupVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const firstShiftDriverCount = firstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity,0);
    const firstShiftOTGCount = firstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const secondShiftDriverCount = secondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const secondShiftOTGCount = secondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
    const breakdownVanCount = breakdownVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);

    const setupComments = setupVan?.comments?.concat(setUpCar?.comments);
    const firstShiftComments = firstShiftOTG?.comments?.concat(firstShiftDrivers?.comments);
    const secondShiftComments = secondShiftOTG?.comments?.concat(secondShiftDrivers?.comments);
    const breakdownComments = breakdownVan?.comments?.concat(breakdownCar?.comments);

    const setupTime = (setupVan?.starthour % 12) + ":" + setupVan?.startminute.toString().padStart(2, "0") + "pm - " +
      (setupVan?.endhour % 12) + ":" + setupVan?.endminute.toString().padStart(2, "0") + "pm";
    const firstShiftTime = (firstShiftOTG?.starthour % 12) + ":" + firstShiftOTG?.startminute.toString().padStart(2, "0") +
      "pm - " + (firstShiftOTG?.endhour % 12) + ":" + firstShiftOTG?.endminute.toString().padStart(2, "0") + "pm";
    const secondShiftTime = (secondShiftOTG?.starthour % 12) + ":" + secondShiftOTG?.startminute.toString().padStart(2, "0") +
      "pm - " + (secondShiftOTG?.endhour % 12) + ":" + secondShiftOTG?.endminute.toString().padStart(2, "0") + "pm";
    const breakdownTime = (breakdownVan?.starthour % 12) + ":" + breakdownVan?.startminute.toString().padStart(2, "0") +
      "pm - " + (breakdownVan?.endhour % 12) + ":" + breakdownVan?.endminute.toString().padStart(2, "0") + "pm";


    setup.title = 'Set-up';
    setup.signedUp = setupVanCount ? setupVanCount : null;
    setup.comments = setupComments?.length > 0 ? setupComments : null;
    setup.time = setupTime ? setupTime : null;
    firstShift.title = '1st Shift';
    firstShift.driverCount = firstShiftDriverCount ? firstShiftDriverCount : null;
    firstShift.OTGCount = firstShiftOTGCount ? firstShiftOTGCount : null;
    firstShift.signedUp = firstShift.driverCount + firstShift.OTGCount;
    firstShift.comments = firstShiftComments?.length > 0 ? firstShiftComments : null;
    firstShift.time = firstShiftTime ? firstShiftTime : null;
    secondShift.title = '2nd Shift';
    secondShift.driverCount = secondShiftDriverCount ? secondShiftDriverCount : null;
    secondShift.OTGCount = secondShiftOTGCount ? secondShiftOTGCount : null;
    secondShift.signedUp =  secondShift.driverCount +  secondShift.OTGCount;
    secondShift.comments = secondShiftComments?.length > 0 ? secondShiftComments : null;
    secondShift.time = secondShiftTime ? secondShiftTime : null;
    breakdown.title = 'Breakdown';
    breakdown.signedUp = breakdownVanCount ? breakdownVanCount : null;
    breakdown.comments = breakdownComments?.length > 0 ? breakdownComments : null;
    breakdown.time = breakdownTime ? breakdownTime : null;

    if (setupVan) result.push(setup);
    result.push(firstShift, secondShift);
    if (breakdownVan) result.push(breakdown);

    return result;
  }
};
