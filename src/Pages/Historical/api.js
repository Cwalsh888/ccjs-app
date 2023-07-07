export const fetchData = async (days) => {
  if (days) {
    const res = await fetch(`https://ccjs-server.onrender.com/getHistoricalData?` +
      new URLSearchParams({ days: days }));

    return res.json();
  }
};
