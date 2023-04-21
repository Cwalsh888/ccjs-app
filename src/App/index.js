import { useEffect, useState } from "react";

import { CurrentInfo, Historical, FunFacts, About } from "@pages";
import { convertData, convertTodaysData } from "@utils";

import {
  Container,
  PageContainer,
  Title,
  NavigationBox,
  NavRow,
  SideMenu,
  NavButton,
} from "./styled";

const App = () => {
  let [data, setData] = useState([]);
  let [historicaldata, setHistoricalData] = useState([]);
  let [days, setDays] = useState(7);
  let [page, setPage] = useState("currentInfo");

  useEffect(() => {
    fetch(`https://ccjs-server.onrender.com/getTodaysData`)
      .then((response) => response.json())
      .then((result) => setData(convertTodaysData(result.data)))
      .catch((error) => console.log(error.message));
  }, []);

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

  return (
    <Container>
      <Title>Project CCJS</Title>
      <PageContainer>
        {(() => {
          switch (page) {
            case "currentInfo":
              return <CurrentInfo todaysData={data[0]} />;
            case "historical":
              return <Historical historicaldata={historicaldata} />;
            case "funFacts":
              return <FunFacts todaysData={data[0]} />;
            case "about":
              return <About todaysData={data[0]} />;
            default:
              return null;
          }
        })()}
      </PageContainer>
      <NavigationBox>
        <SideMenu hidden={page !== "historical"}>
          <NavButton onClick={() => setDays(7)}>Reset Table</NavButton>
          <NavButton onClick={() => setDays(days + 7)}>Add 1 week</NavButton>
          <NavButton onClick={() => setDays(days + 182)}>
            Add 6 months
          </NavButton>
        </SideMenu>
        <NavRow>
          <NavButton onClick={() => setPage("currentInfo")}>
            Today's Info
          </NavButton>
          <NavButton onClick={() => setPage("historical")}>Past Data</NavButton>
          <NavButton onClick={() => setPage("funFacts")}>More Data</NavButton>
          <NavButton onClick={() => setPage("about")}>About</NavButton>
        </NavRow>
      </NavigationBox>
    </Container>
  );
};

export default App;
