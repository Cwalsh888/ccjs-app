import {
  Card,
  LeftSide,
  RightSide,
} from "./styled";

const ShiftCard = (props) => {
  const { comments, signedUp, title, time } = props;

  const satisfied = (signedUp, title) => {
    if (title === '1st Shift' || title === '2nd Shift') {
      if (signedUp > 1) {
        return true;
      }
    } else {
      if (signedUp > 0) {
        return true;
      } 
    }

    return false;
  }

  return (
    <Card satisfied={satisfied(signedUp, title)}>
      <LeftSide>
        <div>{title}</div>
        <div>{time}</div>
      </LeftSide>
      <RightSide>
        <div>{signedUp ? signedUp : 0} folks signed up!</div>
        {comments ? comments.map((comment) => <div>Comment - {comment?.text}</div>) : null}
      </RightSide>
    </Card>
  );
};

export default ShiftCard;
