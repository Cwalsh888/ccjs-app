import { useState, useEffect } from "react";

import { Title } from "@common";
import { convertTodaysData } from "@utils";
import { Container, Card, CardBox, CardRow, TimeCard, Loading } from "./styled";

const Home = () => {
  const [todaysData, setTodaysData] = useState([]);

  useEffect(() => {
    fetch(`https://ccjs-server.onrender.com/getTodaysData`)
      .then((response) => response.json())
      .then((result) => setTodaysData(convertTodaysData(result.data)[0]))
      .catch((error) => console.log(error.message));
  }, []);

  const [loading, setLoading] = useState(true);

  const commentsSetup = [];
  const commentsFirst = [];
  const commentsSecond = [];
  const commentsBreakdown = [];

  todaysData?.setupComments?.forEach((comment) => {
    commentsSetup.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.firstShiftComments?.forEach((comment) => {
    commentsFirst.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.secondShiftComments?.forEach((comment) => {
    commentsSecond.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.breakdownComments?.forEach((comment) => {
    commentsBreakdown.push(<div>Comment - {comment?.text}</div>);
  });

  useEffect(() => {
    if (todaysData?.date) {
      setLoading(false);
    }
  }, [todaysData]);

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .35 }}
    >
      <Title>Today's shift</Title>
      {loading ? (
        <Loading>This page is loading! Give it 5 seconds.</Loading>
      ) : (
        <>
          <CardBox>
            <CardRow satisfied={todaysData.setupVanCount > 0}>
              <TimeCard>
                <div>Set-up</div>
                {todaysData.setupTime}
              </TimeCard>
              <Card>
                <div>
                  {todaysData.setupVanCount ? todaysData.setupVanCount : 0}{" "}
                  folks signed up!
                  {commentsSetup}
                </div>
              </Card>
            </CardRow>
            <CardRow
              satisfied={
                todaysData.firstShiftOTGCount +
                  todaysData.firstShiftDriverCount >
                1
              }
            >
              <TimeCard>
                <div>1st Shift</div>
                {todaysData.firstShiftTime}
              </TimeCard>
              <Card>
                {todaysData.firstShiftOTGCount +
                  todaysData.firstShiftDriverCount}{" "}
                folks signed up!
                {commentsFirst}
              </Card>
            </CardRow>
            <CardRow
              satisfied={
                todaysData.secondShiftOTGCount +
                  todaysData.secondShiftDriverCount >
                1
              }
            >
              <TimeCard>
                <div>2nd Shift</div>
                {todaysData.secondShiftTime}
              </TimeCard>
              <Card>
                {todaysData.secondShiftOTGCount +
                  todaysData.secondShiftDriverCount}{" "}
                folks signed up!
                {commentsSecond}
              </Card>
            </CardRow>
            <CardRow satisfied={todaysData.breakdownVanCount > 0}>
              <TimeCard>
                <div>Breakdown</div>
                {todaysData.breakdownTime}
              </TimeCard>
              <Card>
                {todaysData.breakdownVanCount
                  ? todaysData.breakdownVanCount
                  : 0}{" "}
                folks signed up!
                {commentsBreakdown}
              </Card>
            </CardRow>
          </CardBox>
        </>
      )}
    </Container>
  );
};

export default Home;
