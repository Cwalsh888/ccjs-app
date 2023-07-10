import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useQuery } from "react-query";

import { Loading, Error, Title } from "@components";
import { convertData } from '@utils';

import { fetchData } from "./api";
import { Container, FlexBox, FlexItems } from "./styled";

const Historical = () => {
  const DAYS_IN_WEEK = 7;
  const [historicaldata, setHistoricalData] = useState([]);
  const [weekday, setWeekday] = useState(0);
  const [days, setDays] = useState();
  const [searchParams] = useSearchParams();
  const emptyblocks = [null, null, null, null, null, null];
  const daysOfTheWeek = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

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
        {daysOfTheWeek.map((days) => (
          <FlexItems key={days} color={'#9C83BF'}>{days}</FlexItems>
        ))}
        {emptyblocks.slice(DAYS_IN_WEEK - weekday).map((item, idx) => (<FlexItems key={idx}></FlexItems>))}
        {historicaldata.map((item) => (
          <FlexItems
            key={item.date}
            color={item.fullDay ? "#b5db82" : item.halfDay ? "#eded80" : "#e57070"}
          >
            {item.month}/{item.day}
          </FlexItems>
        ))}
        {emptyblocks.map((item, idx) => (<FlexItems key={idx}></FlexItems>))}
      </FlexBox>
    </Container>
  );
};

export default Historical;
