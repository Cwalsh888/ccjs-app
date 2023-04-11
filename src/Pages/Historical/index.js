import { useState, useEffect } from 'react';

import { Container, Title, FlexBox, FlexItems, Loading } from './styled';

const Historical = (props) => {
  const { historicaldata } = props;
  let [loading, setLoading] = useState(true);
  let [ historicalData, setHistoricalData ] = useState([]);
  const emptyblocks = [null, null, null, null, null, null];
  
  useEffect(() => {
    if (historicaldata[0]?.date) {
      setLoading(false);
    }
  }, [historicaldata])

  return (
    <Container>
      <Title>
        Past Shifts
      </Title>
      {loading ? 
        <Loading>
          This page is loading! Give it 5 seconds.
        </Loading> : 
        <FlexBox>
            <FlexItems>M</FlexItems>
            <FlexItems>Tu</FlexItems>
            <FlexItems>W</FlexItems>
            <FlexItems>Th</FlexItems>
            <FlexItems>F</FlexItems>
            <FlexItems>S</FlexItems>
            <FlexItems>Su</FlexItems>
            {historicaldata.map(item => 
              <FlexItems color={item.fullDay ? '#6F9838' : item.halfDay ? '#E7E74B' : '#E43131' }>
                {item.date.substring(5,7)}/{item.date.substring(8,10)}
              </FlexItems>)}
            {emptyblocks.map(item => <FlexItems color={'black'}>{item}</FlexItems>)}
        </FlexBox>
      }
    </Container>
  );
}

export default Historical;
