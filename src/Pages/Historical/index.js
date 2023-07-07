import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from "react-query";

import { Loading, Error, Title } from "@components";
import { convertData } from '@utils';

import { fetchData } from "./api";
import { Container, FlexBox, FlexItems } from "./styled";

const Historical = () => {
  const [historicaldata, setHistoricalData] = useState([]);
  const [weekday, setWeekday] = useState(0);
  const [days, setDays] = useState();
  const [searchParams] = useSearchParams();
  const emptyblocks = [null, null, null, null, null, null];

  const { data, isError, isLoading } = useQuery(['past', days], () => fetchData(days));

  // Wrapper around searchParams into days, otherwise searchParams causes 2 network calls. React-router bug. 
  // set --> null --> set = 2 network calls.
  useEffect(() => {
    if (searchParams.get('days')) {
      setDays(searchParams.get('days'));
    }
    // eslint-disable-next-line
  }, [searchParams.get('days')]);

  useEffect(() => {
    if (historicaldata[0]?.date) {
      setWeekday(new Date(historicaldata[0].date).getDay());
    }
  }, [historicaldata]);

  useEffect(() => {
    if (data) {
      setHistoricalData(convertData(data));
    }
  }, [data])

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
      <Title>Past Shifts</Title>
      <FlexBox>
        <FlexItems>M</FlexItems>
        <FlexItems>Tu</FlexItems>
        <FlexItems>W</FlexItems>
        <FlexItems>Th</FlexItems>
        <FlexItems>F</FlexItems>
        <FlexItems>Sa</FlexItems>
        <FlexItems>Su</FlexItems>
        {emptyblocks.slice(6 - weekday).map((item, idx) => (
          <FlexItems key={idx} color={"black"}>
            {item}
          </FlexItems>
        ))}
        {historicaldata.map((item) => (
          <FlexItems
            key={item.date}
            color={item.fullDay ? "#6F9838" : item.halfDay ? "#E7E74B" : "#E43131"}
          >
            {item.month}/{item.day}
          </FlexItems>
        ))}
        {emptyblocks.map((item, idx) => (
          <FlexItems key={idx} color={"black"}>
            {item}
          </FlexItems>
        ))}
      </FlexBox>
    </Container>
  );
};

export default Historical;
