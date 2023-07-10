export const convertData = (data) => {
  let result = [];

  if (data && data.length > 0) {
    result = data.map((item) => {
      const container = {};

      const legacyFirstShiftOTG = item.jobs.find((shift) => shift.name === "otg");
      const legacyFirstShiftDrivers = item.jobs.find((shift) => shift.name === "driving");
      const legacySecondShiftDrivers = item.jobs.findLast((shift) => shift.name === "driving");
      const legacySecondShiftOTG = item.jobs.findLast((shift) => shift.name === "otg");
      const setupVan = item.jobs.find((shift) => shift.name === "set up van driver");
      const firstShiftDrivers = item.jobs.find((shift) => shift.name === "driving (first shift)");
      const firstShiftOTG = item.jobs.find((shift) => shift.name === "otg (first shift)");
      const secondShiftDrivers = item.jobs.find((shift) => shift.name === "driving (second shift)");
      const secondShiftOTG = item.jobs.find((shift) => shift.name === "otg (second shift)");
      const breakdownVan = item.jobs.find((shift) => shift.name === "breakdown van driver");

      const legacyFirstShiftDriverCount =legacyFirstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacyFirstShiftOTGCount = legacyFirstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftDriverCount = legacySecondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftOTGCount = legacySecondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const setupVanCount = setupVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftDriverCount = firstShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity,0);
      const firstShiftOTGCount = firstShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftDriverCount = secondShiftDrivers?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftOTGCount = secondShiftOTG?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);
      const breakdownVanCount = breakdownVan?.jobassignments.reduce((acc, curr) => acc + curr.quantity, 0);

      const halfDay =
        legacyFirstShiftDriverCount + legacyFirstShiftOTGCount >= 2 ||
        firstShiftDriverCount + firstShiftOTGCount >= 2 ||
        legacySecondShiftDriverCount + legacySecondShiftOTGCount >= 2 ||
        secondShiftDriverCount + secondShiftOTGCount >= 2;
      const fullDay =
        (legacyFirstShiftDriverCount + legacyFirstShiftOTGCount >= 2 ||
          firstShiftDriverCount + firstShiftOTGCount >= 2) &&
        (legacySecondShiftDriverCount + legacySecondShiftOTGCount >= 2 ||
          secondShiftDriverCount + secondShiftOTGCount >= 2);

      container.date = item.edate ? item.edate : null;
      container.month = item.edate ? item.edate.substring(5, 7) : null;
      container.day = item.edate ? item.edate.substring(8, 10) : null;
      container.setupVanCount = setupVanCount ? setupVanCount : null;
      container.firstShiftDriverCount = firstShiftDriverCount ? firstShiftDriverCount : null;
      container.firstShiftOTGCount = firstShiftOTGCount ? firstShiftOTGCount : null;
      container.secondShiftDriverCount = secondShiftDriverCount ? secondShiftDriverCount : null;
      container.secondShiftOTGCount = secondShiftOTGCount ? secondShiftOTGCount : null;
      container.breakdownVanCount = breakdownVanCount ? breakdownVanCount : null;
      container.halfDay = halfDay ? halfDay : null;
      container.fullDay = fullDay ? fullDay : null;

      return container;
    });
  }
  return result;
};
