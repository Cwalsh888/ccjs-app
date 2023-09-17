import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from "react-query";

import { Loading, Error, Title } from "@components";
import { convertFunData } from '@utils';

import { fetchData } from "./api";
import { Container, Summary } from "./styled";

const FunFacts = () => {
  const [funData, setFunData] = useState([]);
  const [searchParams] = useSearchParams();
  const [days, setDays] = useState();
  const { data, isError, isLoading } = useQuery(['fun', days], () => fetchData(days));

  useEffect(() => {
    if (searchParams.get('days')) {
      setDays(searchParams.get('days'));
    }
    // eslint-disable-next-line
  }, [searchParams.get('days')]);

  useEffect(() => {
    if (data) {
      setFunData(convertFunData(data));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Title>More Data</Title>
      <div>
        {/* Slider div to toggle timeframe shown.<br></br> */}
        Days Looking Back: {days} <br></br>
        Disclaimer-- I currently only trust how I'm pulling this data like ~35%. So take as a rough estimate. <br></br>
        Will get more refined over time.
      </div>
      <br></br>
      <Summary>
        Highest Streak of Jail Support running: {funData.streak}
        <hr></hr>
        Number of Unique volunteers: {funData.volunteers?.size}
        <hr></hr>
        A list of each days 'fullShift' % rate: 
      </Summary>
    </Container>
  );
};

export default FunFacts;
