import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000", "https://ccjs.onrender.com"]
};

const requestEndpoint = "https://signup.com/api/events?accesskey=13fcbcd593bef760aaa4feeea1f7d14424466e1a&activity_id=3424432&enddate=2023%2F06%2F30&include_comments=false&include_jobassignments=true&include_jobs=true&my_jobs=false&selected_activity=3424432&startdate=2020%2F10%2F19";

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});