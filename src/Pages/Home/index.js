import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { ShiftCard, Loading, Error, Title } from "@components";
import { convertTodaysData } from "@utils";

import { fetchData } from "./api";
import { Container, CardBox } from "./styled";

const Home = () => {
  const [todaysData, setTodaysData] = useState([]);
  const { data, isError, isLoading } = useQuery("today", fetchData);

  useEffect(() => {
    if (data) {
      setTodaysData(convertTodaysData(data));
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
      <Title>Today's Shift</Title>
      <CardBox>
        {todaysData.map((shift) => {
          return (
            <ShiftCard
              key={shift.title}
              title={shift.title}
              time={shift.time} 
              signedUp={shift.signedUp} 
              comments={shift.comments} 
            />
          )
        })}
      </CardBox>
    </Container>
  );
};

export default Home;
