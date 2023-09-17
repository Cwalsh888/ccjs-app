import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { Loading, Error, Title } from "@components";
import { convertFunData } from '@utils';

import { fetchData } from "./api";
import { Container, Summary } from "./styled";

const FunFacts = () => {
  const days = 7;
  const [funData, setFunData] = useState([]);
  const { data, isError, isLoading } = useQuery(['fun', days], () => fetchData(days));

  useEffect(() => {
    if (data) {
      setFunData(convertFunData(data));
      console.log(funData);
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
        Slider div to toggle timeframe shown.
      </div>
      <Summary>
        Highest Streak of Jail Support running:
        <hr></hr>
        Number of Unique volunteers:
        <hr></hr>
        A list of each days 'fullShift' % rate;  
      </Summary>
    </Container>
  );
};

export default FunFacts;
