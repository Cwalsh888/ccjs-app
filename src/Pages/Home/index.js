import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { Title } from "@common";
import { ShiftCard } from "@components";
import { convertTodaysData } from "@utils";

import { Container, CardBox, Loading } from "./styled";

const fetchData = async () => {
  const res = await fetch("https://ccjs-server.onrender.com/getTodaysData");
  return res.json();
};

const Home = () => {
  const [todaysData, setTodaysData] = useState([]);
  const { data, status, isLoading } = useQuery("today", fetchData);

  useEffect(() => {
    if (data) {
      setTodaysData(convertTodaysData(data));
    }
  }, [data]);

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

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .35 }}
    >
      <Title>Today's shift</Title>
      {isLoading ? (
        <Loading>This page is loading! Give it 5 seconds.</Loading>
      ) : (
        <>
          <CardBox>
            <ShiftCard 
              title={'Set-up'}
              time={todaysData.setupTime} 
              signedUp={todaysData.setupVanCount} 
              comments={commentsSetup} 
            />
            <ShiftCard 
              title={'1st Shift'} 
              time={todaysData.firstShiftTime} 
              signedUp={todaysData.firstShiftOTGCount + todaysData.firstShiftDriverCount} 
              comments={commentsFirst} 
            />
            <ShiftCard 
              title={'2nd Shift'} 
              time={todaysData.secondShiftTime} 
              signedUp={todaysData.secondShiftOTGCount + todaysData.secondShiftDriverCount} 
              comments={commentsSecond} 
            />
            <ShiftCard 
              title={'Breakdown'} 
              time={todaysData.breakdownTime} 
              signedUp={todaysData.breakdownVanCount} 
              comments={commentsBreakdown} 
            />
          </CardBox>
        </>
      )}
    </Container>
  );
};

export default Home;