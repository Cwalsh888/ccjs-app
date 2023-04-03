import { useState, useEffect } from 'react';
import { FlexBox, FlexItems, Loading } from './styled';

const Historical = (props) => {
  const { newData } = props;
  let [loading, setLoading] = useState(true);

  let dataList = [];
  let emptyblocks = [null, null, null, null, null, null];
  let today = new Date();
  newData.forEach(data => {
    if (today > new Date(data.date)) {
      let month = data.date.substring(5,7);
      let day = data.date.substring(8,10);
      dataList.push(<FlexItems color={data.fullDay ? 'green' : data.halfDay ? 'yellow' : 'red' }>{month}/{day}</FlexItems>)
    }
  });
  emptyblocks.forEach(block => {
    dataList.push(<FlexItems color={'black'}>{block}</FlexItems>);
  });

  useEffect(() => {
    if (newData[0]?.date) {
      setLoading(false);
    }
  }, [newData])

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
            {dataList}
        </FlexBox>
      }
    </>
  );
}

export default Historical;
