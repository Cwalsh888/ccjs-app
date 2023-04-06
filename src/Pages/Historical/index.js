import { useState, useEffect } from 'react';

import { FlexBox, FlexItems, Loading } from './styled';

const Historical = (props) => {
  const { historicaldata } = props;
  let [loading, setLoading] = useState(true);
  const emptyblocks = [null, null, null, null, null, null];
  
  useEffect(() => {
    if (historicaldata[0]?.date) {
      setLoading(false);
    }
  }, [historicaldata])

  return (
    <>
      <h1>
        Past Shifts
      </h1>
      {loading ? 
        <Loading>
          This page is loading! Give it 5 seconds.
        </Loading> : 
        <FlexBox>
            <FlexItems>Mon</FlexItems>
            <FlexItems>Tues</FlexItems>
            <FlexItems>Wed</FlexItems>
            <FlexItems>Thurs</FlexItems>
            <FlexItems>Fri</FlexItems>
            <FlexItems>Sat</FlexItems>
            <FlexItems>Su</FlexItems>
            {historicaldata.map(item => 
              <FlexItems color={item.fullDay ? 'green' : item.halfDay ? 'yellow' : 'red' }>
                {item.date.substring(5,7)}/{item.date.substring(8,10)}
              </FlexItems>)}
            {emptyblocks.map(item => <FlexItems color={'black'}>{item}</FlexItems>)}
        </FlexBox>
      }
    </>
  );
}

export default Historical;
