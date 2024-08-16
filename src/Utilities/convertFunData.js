export const convertFunData = (data) => {
  let result = {};
  let streak = 0;
  const volunteers = new Set();

  if (data && data.length > 0) {
    result.days = data.map((item) => {
      const container = {};

      const legacyFirstShiftOTG = item.jobs.find((shift) => shift.name === "otg")?.jobassignments;
      const legacyFirstShiftDrivers = item.jobs.find((shift) => shift.name === "driving")?.jobassignments;
      const legacySecondShiftDrivers = item.jobs.findLast((shift) => shift.name === "driving")?.jobassignments;
      const legacySecondShiftOTG = item.jobs.findLast((shift) => shift.name === "otg")?.jobassignments;
      const setupVan = item.jobs.find((shift) => shift.name === "set up van driver")?.jobassignments;
      const firstShiftDrivers = item.jobs.find((shift) => shift.name === "driving (first shift)")?.jobassignments;
      const firstShiftOTG = item.jobs.find((shift) => shift.name === "otg (first shift)")?.jobassignments;
      const secondShiftDrivers = item.jobs.find((shift) => shift.name === "driving (second shift)")?.jobassignments;
      const secondShiftOTG = item.jobs.find((shift) => shift.name === "otg (second shift)")?.jobassignments;
      const breakdownVan = item.jobs.find((shift) => shift.name === "breakdown van driver")?.jobassignments;

      // Counting the amount of volunteers per shift
      const legacyFirstShiftDriverCount = legacyFirstShiftDrivers?.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacyFirstShiftOTGCount = legacyFirstShiftOTG?.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftDriverCount = legacySecondShiftDrivers?.reduce((acc, curr) => acc + curr.quantity, 0);
      const legacySecondShiftOTGCount = legacySecondShiftOTG?.reduce((acc, curr) => acc + curr.quantity, 0);
      const firstShiftDriverCount = firstShiftDrivers?.reduce((acc, curr) => acc + curr.quantity,0);
      const firstShiftOTGCount = firstShiftOTG?.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftDriverCount = secondShiftDrivers?.reduce((acc, curr) => acc + curr.quantity, 0);
      const secondShiftOTGCount = secondShiftOTG?.reduce((acc, curr) => acc + curr.quantity, 0);

      // Tracking Unique volunteers. 
      if (setupVan?.map(person => person.volunteer_id).length > 0) {
        volunteers.add(...setupVan?.map(person => person.volunteer_id));
      }
      legacyFirstShiftOTG ? volunteers.add(...legacyFirstShiftOTG?.map(person => person.volunteer_id)) : volunteers.add(...firstShiftOTG?.map(person => person.volunteer_id));
      legacyFirstShiftDrivers ? volunteers.add(...legacyFirstShiftDrivers?.map(person => person.volunteer_id)) : volunteers.add(...firstShiftDrivers?.map(person => person.volunteer_id));
      legacySecondShiftOTG ? volunteers.add(...legacySecondShiftOTG?.map(person => person.volunteer_id)) : volunteers.add(...secondShiftOTG?.map(person => person.volunteer_id));
      legacySecondShiftDrivers ? volunteers.add(...legacySecondShiftDrivers?.map(person => person.volunteer_id)) : volunteers.add(...secondShiftDrivers?.map(person => person.volunteer_id));
      if (breakdownVan?.map(person => person.volunteer_id).length > 0) {
        volunteers.add(...breakdownVan?.map(person => person.volunteer_id));
      }
  
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
      
      streak = (halfDay) ? ++streak : 0;

      container.halfDay = halfDay ? halfDay : null;
      container.fullDay = fullDay ? fullDay : null;
      container.streak = streak ? streak : null;

      return container;
    });
  }

  result.streak = result.days.reduce((a,b) => a.streak > b.streak ? a : b).streak;
  volunteers.delete(undefined);
  result.volunteers = volunteers;
  return result;
};
