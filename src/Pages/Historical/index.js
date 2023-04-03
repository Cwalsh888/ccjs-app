import { FlexBox, FlexItems } from './styled';

const Historical = (props) => {
  const { newData } = props;

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

  return (
    <>
      <h1>
        Past Shifts
      </h1>
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
    </>
  );
}

export default Historical;
