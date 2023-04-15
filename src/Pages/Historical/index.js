import { useState, useEffect } from 'react';

import { Title } from '../common';
import { Container, FlexBox, FlexItems, Loading } from './styled';

const Historical = (props) => {
  const { historicaldata } = props;
  let [loading, setLoading] = useState(true);
  let [weekday, setWeekday] = useState(0);
  const emptyblocks = [null, null, null, null, null, null];
  
  useEffect(() => {
    if (historicaldata[0]?.date) {
      setWeekday(new Date(historicaldata[0].date).getDay());

      console.log(historicaldata);
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
            <FlexItems>Sa</FlexItems>
            <FlexItems>Su</FlexItems>
            {emptyblocks.slice(6 - weekday).map((item, idx) => 
              <FlexItems key={idx} color={'black'}>{item}</FlexItems>
            )}
            {historicaldata.map(item => 
              <FlexItems key={item.date} color={item.fullDay ? '#6F9838' : item.halfDay ? '#E7E74B' : '#E43131' }>
                {item.date.substring(5,7)}/{item.date.substring(8,10)}
              </FlexItems>
            )}
            {emptyblocks.map((item, idx) => <FlexItems key={idx} color={'black'}>{item}</FlexItems>)}
        </FlexBox>
      }
    </Container>
  );
}

export default Historical;
