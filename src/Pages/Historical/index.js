import { FlexBox, FlexItems } from './styled';

const Historical = (props) => {
  const { newData } = props;

  let dataList = [];
  let today = new Date();
  newData.forEach((data, index) => {
    if (today > new Date(data.date)) {
      let month = data.date.substring(5,7);
      let day = data.date.substring(8,10);
      dataList.push(<FlexItems fullDay={data.fullDay}>{month}/{day}</FlexItems>)
    }
  });
  return (
    <>
      <h1>
        This is the Historical Page!
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
