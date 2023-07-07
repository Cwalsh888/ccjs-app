import { Container } from "./styled";

const Title = (props) => {
  const { children } = props;

  return (
    <Container>{children}</Container>
  );
};

export default Title;
