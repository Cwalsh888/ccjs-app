import { useEffect, useState } from 'react';
import { FlexBox, FlexItems } from './styled';

const Historical = (props) => {
  const { newData } = props;
  
  let dataList = [];
  let today = new Date();
  newData.forEach((data, index) => {
    if (today > new Date(data.date)) {
      let month = new Date(data.date).getMonth() +  1;
      dataList.push(<FlexItems fullDay={data.fullDay}>{month}</FlexItems>)
    }
  })
  return (
    <>
    <h1>
      This is the Historical Page!
    </h1>
    <FlexBox>
     <FlexItems>Su</FlexItems>
     <FlexItems>Mon</FlexItems>
     <FlexItems>Tues</FlexItems>
     <FlexItems>Wed</FlexItems>
     <FlexItems>Thurs</FlexItems>
     <FlexItems>Fri</FlexItems>
     <FlexItems>Sat</FlexItems>
      {dataList}
    </FlexBox>
    </>
  );
}

export default Historical;
