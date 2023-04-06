import { useEffect, useState } from 'react';
import CurrentInfo from '../Pages/CurrentInfo';
import Historical from '../Pages/Historical';
import FunFacts from '../Pages/FunFacts';
import About from '../Pages/About';
import { convertData } from '../Utilities/convertData';

import { Container, PageContainer, Title, NavigationBox, NavButton } from './styled';

const Main = () => {
  let [data, setData] = useState([]);
  let [todaysData, setTodaysData] = useState({});
  let [page, setPage] = useState('currentInfo');

  const date = new Date();

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();

  let today = `${year}-${month}-${day}`;

  useEffect(() => {
    fetch(`https://ccjs-server.onrender.com/getData`)
     .then(response => response.json())
     .then(result => setData(convertData(result.data)))
     .catch(error => console.log(error.message));
  }, []);

  return (
    <Container>
      <Title>
        Project CCJS
      </Title>
      <PageContainer>   
        {(() => {
          switch (page) {
            case 'currentInfo':
              return <CurrentInfo todaysData={data[0]} />
            case 'historical':
              return <Historical newData={data[0]} />
            case 'funFacts':
              return <FunFacts todaysData={data[0]} />
            case 'about':
              return <About todaysData={data[0]} />
            default:
              return null
          }
        })()}
      </PageContainer>
      <NavigationBox>
        <NavButton onClick={() => setPage('currentInfo')}>
          Today's Info
        </NavButton>
        <NavButton onClick={() => setPage('historical')}>
          Past Data
        </NavButton>
        <NavButton onClick={() => setPage('funFacts')}>
          More Data
        </NavButton>
        <NavButton onClick={() => setPage('about')}>
          About 
        </NavButton>
      </NavigationBox>
    </Container>
  );
}

export default Main;
