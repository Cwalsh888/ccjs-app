import { useState, useEffect } from 'react';

import { Title } from '../common';

import { Card, CardBox, CardRow, TimeCard, Loading } from './styled';

const CurrentInfo = (props) => {
  const { todaysData } = props;
  let [loading, setLoading] = useState(true);

  let commentsSetup = [];
  let comments1st = [];
  let comments2nd = [];
  let commentsBreakdown = [];

  todaysData?.setupComments?.forEach(comment => {
    commentsSetup.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.shift1stComments?.forEach(comment => {
    comments1st.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.shift2ndComments?.forEach(comment => {
    comments2nd.push(<div>Comment - {comment?.text}</div>);
  });
  todaysData?.breakdownComments?.forEach(comment => {
    commentsBreakdown.push(<div>Comment - {comment?.text}</div>);
  });

  useEffect(() => {
    if (todaysData?.date) {
      setLoading(false);
    }
  }, [todaysData])

  return (
    <>
      <Title>
        Today's shift
      </Title>
      {loading ? 
        <Loading>
          This page is loading! Give it 5 seconds.
        </Loading>  :  
        <>
          <CardBox>
            <CardRow satisfied={todaysData?.setupVan > 0}>
              <TimeCard>
                <div>Set-up</div>
                {todaysData.setupTime}
              </TimeCard>
              <Card>
                <div>
                  {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks signed up!
                  {commentsSetup}
                </div>
              </Card>
            </CardRow>
            <CardRow satisfied={todaysData?.otgFirstShift + todaysData?.drivingFirstShift > 1}>
              <TimeCard>
                <div>1st Shift</div>
                {todaysData.shift1stTime}
              </TimeCard>
              <Card >
                {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks signed up! 
                {comments1st}
              </Card>
            </CardRow>
            <CardRow satisfied={todaysData?.otgSecondShift + todaysData?.drivingSecondShift > 1}>
              <TimeCard>
                <div>2nd Shift</div>
                {todaysData.shift2ndTime}
              </TimeCard>
              <Card>
                {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks signed up!
                {comments2nd}
              </Card>
            </CardRow>
            <CardRow satisfied={todaysData?.breakdownVan > 0}>
              <TimeCard>
                <div>Breakdown</div>
                {todaysData.breakdownTime}
              </TimeCard>
              <Card>
                {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks signed up!
                {commentsBreakdown}
              </Card>
            </CardRow>
          </CardBox>
        </>
      }      
    </>
  );
}

export default CurrentInfo;
