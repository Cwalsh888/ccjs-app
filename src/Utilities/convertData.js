export const convertData = (data) => {
  let result = [];

  if (data.length > 0) {
    result = data.map((ele) => {
      const container = {};

      const legacySetup = ele.jobs.find((ele) => ele.name === "set up");
      const legacyFirstShiftOTG = ele.jobs.find((ele) => ele.name === "otg");
      const legacyFirstShiftDrivers = ele.jobs.find(
        (ele) => ele.name === "driving"
      );
      const legacySecondShiftDrivers = ele.jobs.findLast(
        (ele) => ele.name === "driving"
      );
      const legacySecondShiftOTG = ele.jobs.findLast(
        (ele) => ele.name === "otg"
      );
      const legacyBreakdown = ele.jobs.find((ele) => ele.name === "breakdown");
      const setUpCar = ele.jobs.find(
        (ele) => ele.name === "set up car (daily supply needs pickup)"
      );
      const setupVan = ele.jobs.find((ele) => ele.name === "set up van driver");
      const firstShiftDrivers = ele.jobs.find(
        (ele) => ele.name === "driving (first shift)"
      );
      const firstShiftOTG = ele.jobs.find(
        (ele) => ele.name === "otg (first shift)"
      );
      const secondShiftDrivers = ele.jobs.find(
        (ele) => ele.name === "driving (second shift)"
      );
      const secondShiftOTG = ele.jobs.find(
        (ele) => ele.name === "otg (second shift)"
      );
      const breakdownCar = ele.jobs.find((ele) => ele.name === "breakdown car");
      const breakdownVan = ele.jobs.find(
        (ele) => ele.name === "breakdown van driver"
      );

      const legacySetupCount = legacySetup?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const legacyFirstShiftDriverCount =
        legacyFirstShiftDrivers?.jobassignments.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
      const legacyFirstShiftOTGCount =
        legacyFirstShiftOTG?.jobassignments.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
      const legacySecondShiftDriverCount =
        legacySecondShiftDrivers?.jobassignments.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
      const legacySecondShiftOTGCount =
        legacySecondShiftOTG?.jobassignments.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
      const legacyBreakdownCount = legacyBreakdown?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const setupCarCount = setUpCar?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const setupVanCount = setupVan?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const firstShiftDriverCount = firstShiftDrivers?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const firstShiftOTGCount = firstShiftOTG?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const secondShiftDriverCount = secondShiftDrivers?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const secondShiftOTGCount = secondShiftOTG?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const breakdownCarCount = breakdownCar?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const breakdownVanCount = breakdownVan?.jobassignments.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

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

      container.legacySetupCount = legacySetupCount ? legacySetupCount : null;
      container.legacyFirstShiftDriverCount = legacyFirstShiftDriverCount
        ? legacyFirstShiftDriverCount
        : null;
      container.legacyFirstShiftOTGCount = legacyFirstShiftOTGCount
        ? legacyFirstShiftOTGCount
        : null;
      container.legacySecondShiftDriverCount = legacySecondShiftDriverCount
        ? legacySecondShiftDriverCount
        : null;
      container.legacySecondShiftOTGCount = legacySecondShiftOTGCount
        ? legacySecondShiftOTGCount
        : null;
      container.legacyBreakdownCount = legacyBreakdownCount
        ? legacyBreakdownCount
        : null;
      container.date = ele.edate ? ele.edate : null;
      container.month = ele.edate ? ele.edate.substring(5, 7) : null;
      container.day = ele.edate ? ele.edate.substring(8, 10) : null;
      container.setupCarCount = setupCarCount ? setupCarCount : null;
      container.setupVanCount = setupVanCount ? setupVanCount : null;
      container.firstShiftDriverCount = firstShiftDriverCount
        ? firstShiftDriverCount
        : null;
      container.firstShiftOTGCount = firstShiftOTGCount
        ? firstShiftOTGCount
        : null;
      container.secondShiftDriverCount = secondShiftDriverCount
        ? secondShiftDriverCount
        : null;
      container.secondShiftOTGCount = secondShiftOTGCount
        ? secondShiftOTGCount
        : null;
      container.breakdownCarCount = breakdownCarCount
        ? breakdownCarCount
        : null;
      container.breakdownVanCount = breakdownVanCount
        ? breakdownVanCount
        : null;
      container.halfDay = halfDay ? halfDay : null;
      container.fullDay = fullDay ? fullDay : null;

      return container;
    });
  }
  return result;
};
