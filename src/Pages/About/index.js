import { Title } from "@common";

import { Container, Summary } from "./styled";

const About = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Title>About Me</Title>
      <Summary>
        Hello! <br />
        CCJS is a volunteer-ran organization that runs everyday. <br />
        I made this site to visualize some of the data from the CCJS group.{" "}
        <br />
      </Summary>
    </Container>
  );
};

export default About;
