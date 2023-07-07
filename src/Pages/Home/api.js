export const fetchData = async () => {
  const res = await fetch("https://ccjs-server.onrender.com/getTodaysData");
  return res.json();
};
