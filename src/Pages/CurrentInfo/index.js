import { Card, CardBox } from './styled';

const CurrentInfo = (props) => {
  const { todaysData } = props;

  let commentsSetup = [];
  let comments1st = [];
  let comments2nd = [];
  let commentsBreakdown = [];

  todaysData?.setupComments?.forEach(comment => {
    commentsSetup.push(<div>A volunteer says - {comment.text}</div>);
  });
  todaysData?.shift1stComments?.forEach(comment => {
    comments1st.push(<div>A volunteer says - {comment.text}</div>);
  });
  todaysData?.shift2ndComments?.forEach(comment => {
    comments2nd.push(<div>A volunteer says - {comment.text}</div>);
  });
  todaysData?.breakdownComments?.forEach(comment => {
    commentsBreakdown.push(<div>A volunteer says - {comment.text}</div>);
  });

  return (
    <>
      <h1>
        Today's date is {todaysData?.date}
      </h1>
      <CardBox>
        <Card satisfied={todaysData?.setupVan > 0}>
          We have {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks on setup!
          {commentsSetup}
        </Card>
        <Card satisfied={todaysData?.otgFirstShift + todaysData?.drivingFirstShift > 1}>
          We have {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks on 1st shift! 
          {comments1st}
        </Card>
        <Card satisfied={todaysData?.otgSecondShift + todaysData?.drivingSecondShift > 1}>
          We have {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks on 2nd shift!
          {comments2nd}
        </Card>
        <Card satisfied={todaysData?.breakdownVan > 0}>
          We have {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks on breakdown!
          {commentsBreakdown}
        </Card>
      </CardBox>
      <div>
        We could use x more folks on x shift to get jail support running!
      </div>
    </>
  );
}

export default CurrentInfo;
