import { Card, CardBox, CardRow, TimeCard } from './styled';

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
        Today's shift
      </h1>
      <CardBox>
        <CardRow>
          <TimeCard>
            <div>Set-up</div>
          </TimeCard>
          <Card satisfied={todaysData?.setupVan > 0}>
            {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks on setup!
            {commentsSetup}
          </Card>
        </CardRow>
        <CardRow>
          <TimeCard>
            <div>1st Shift</div>
          </TimeCard>
          <Card satisfied={todaysData?.otgFirstShift + todaysData?.drivingFirstShift > 1}>
            {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks on 1st shift! 
            {comments1st}
          </Card>
        </CardRow>
        <CardRow>
          <TimeCard>
            <div>2nd Shift</div>
          </TimeCard>
          <Card satisfied={todaysData?.otgSecondShift + todaysData?.drivingSecondShift > 1}>
            {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks on 2nd shift!
            {comments2nd}
          </Card>
        </CardRow>
        <CardRow>
          <TimeCard>
            <div>Breakdown</div>
          </TimeCard>
          <Card satisfied={todaysData?.breakdownVan > 0}>
            {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks on breakdown!
            {commentsBreakdown}
          </Card>
        </CardRow>
      </CardBox>
    </>
  );
}

export default CurrentInfo;
