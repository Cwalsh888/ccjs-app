import { useEffect, useState } from 'react';
import { Card, CardBox, Container } from './styled';

const About = (props) => {
  const { todaysData } = props;

  return (
    <>
      <h1>
        This is the About Page!
      </h1>
      <div>
        Hello! I made this website to visualize some of the data from the CCJS group.
        CCJS is a volunter-ran organization that runs everyday.
        It could potentially be used to see the current status of today's shift and see what we need as well.
      </div>
    </>
  );
}

export default About;
