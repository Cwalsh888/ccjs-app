import { useState } from 'react';

const Homepage = async () => {
  const [data, setData] = useState(null);

  // https://signup.com/api/events?accesskey=13fcbcd593bef760aaa4feeea1f7d14424466e1a&activity_id=3424432
  // &enddate=2023%2F06%2F30&include_comments=false&include_jobassignments=true&include_jobs=true&my_jobs=false
  // &selected_activity=3424432&startdate=2020%2F10%2F19

  // let url = 'https://api.github.com/users/Cwalsh888';
  // let response = await fetch(url);

  // if (response.ok) {
  //   setData(await response.json());
  //   console.log(data);
  // } else {
  //   console.log("omg ur one call failed homie");
  // }

  return (
    <div>
      I'm the homepage! Lonely and empty.  
    </div>
  );
}

export default Homepage;
