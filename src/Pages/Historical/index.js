import { useState, useEffect } from "react";

import { convertData } from '@utils';
import { Title } from "@common";

import { Container, FlexBox, FlexItems, Loading } from "./styled";

const Historical = () => {

  const [historicaldata, setHistoricalData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [weekday, setWeekday] = useState(0);
  let days = 60;
  const emptyblocks = [null, null, null, null, null, null];

  useEffect(() => {
    fetch(
      `https://ccjs-server.onrender.com/getHistoricalData?` +
        new URLSearchParams({
          days: days,
        })
    )
      .then((response) => response.json())
      .then((result) => setHistoricalData(convertData(result.data)))
      .catch((error) => console.log(error.message));
  }, [days]);


  useEffect(() => {
    if (historicaldata[0]?.date) {
      setWeekday(new Date(historicaldata[0].date).getDay());
      setLoading(false);
    }
  }, [historicaldata]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .45 }}
    >
      <Title>Past Shifts</Title>
      {loading ? (
        <Loading>This page is loading! Give it 5 seconds.</Loading>
      ) : (
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
              color={
                item.fullDay ? "#6F9838" : item.halfDay ? "#E7E74B" : "#E43131"
              }
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
      )}
    </Container>
  );
};

export default Historical;
