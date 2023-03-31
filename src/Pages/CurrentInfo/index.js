import { Card, CardBox } from './styled';

const CurrentInfo = (props) => {
  const { todaysData } = props;

  return (
    <>
      <h1>
        Today's date is {todaysData?.date}
      </h1>
      <CardBox>
        <Card>
          We have {todaysData?.setupVan ? todaysData?.setupVan : 0 } folks on setup!
        </Card>
        <Card>
          We have {todaysData?.otgFirstShift + todaysData?.drivingFirstShift} folks on 1st shift! 
        </Card>
        <Card>
          We have {todaysData?.otgSecondShift + todaysData?.drivingSecondShift} folks on 2nd shift!
        </Card>
        <Card>
          We have {todaysData?.breakdownVan ? todaysData?.breakdownVan : 0 } folks on breakdown!
        </Card>
      </CardBox>
    </>
  );
}

export default CurrentInfo;
