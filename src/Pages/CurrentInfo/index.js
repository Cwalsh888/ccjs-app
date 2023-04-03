import { Card, CardBox } from './styled';

const CurrentInfo = (props) => {
  const { todaysData } = props;

  return (
    <>
      <h1>
        Today's date is {todaysData?.date}
      </h1>
      <CardBox>
        <Card satisfied={todaysData?.setupVan > 0}>
          We have {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks on setup!
        </Card>
        <Card satisfied={todaysData?.otgFirstShift + todaysData?.drivingFirstShift > 1}>
          We have {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks on 1st shift! 
        </Card>
        <Card satisfied={todaysData?.otgSecondShift + todaysData?.drivingSecondShift > 1}>
          We have {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks on 2nd shift!
        </Card>
        <Card satisfied={todaysData?.breakdownVan > 0}>
          We have {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks on breakdown!
        </Card>
      </CardBox>
      <div>
        We could use x more folks on x shift to get jail support running!
      </div>
    </>
  );
}

export default CurrentInfo;
