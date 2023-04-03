import { useEffect, useState } from 'react';
import { Card, CardBox, Container } from './styled';

const FunFacts = (props) => {
  const { todaysData } = props;

  return (
    <>
      <h1>
        This is the Fun Facts Page!
      </h1>
      <div>
        Data to parse through for facts:
        <ul>
          <li>Rough number of total unique volunteers</li>
          <li>Average number of unique volunteers per year</li>
          <li>Most days Jail Support ran in a row</li>
        </ul>
      </div>
    </>
  );
}

export default FunFacts;
