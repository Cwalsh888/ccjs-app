import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { Title } from "@common";
import { ShiftCard, Loading } from "@components";
import { convertTodaysData } from "@utils";

import { Container, CardBox } from "./styled";

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

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Title>Today's shift</Title>
      {isLoading ? <Loading /> : 
      (
        <>
          <CardBox>
            <ShiftCard 
              title={'Set-up'}
              time={todaysData.setupTime} 
              signedUp={todaysData.setupVanCount} 
              comments={todaysData.setupComments} 
            />
            <ShiftCard 
              title={'1st Shift'} 
              time={todaysData.firstShiftTime} 
              signedUp={todaysData.firstShiftOTGCount + todaysData.firstShiftDriverCount} 
              comments={todaysData.firstShiftComments} 
            />
            <ShiftCard 
              title={'2nd Shift'} 
              time={todaysData.secondShiftTime} 
              signedUp={todaysData.secondShiftOTGCount + todaysData.secondShiftDriverCount} 
              comments={todaysData.secondShiftComments} 
            />
            <ShiftCard 
              title={'Breakdown'} 
              time={todaysData.breakdownTime} 
              signedUp={todaysData.breakdownVanCount} 
              comments={todaysData.breakdownComments} 
            />
          </CardBox>
        </>
      )}
    </Container>
  );
};

export default Home;
