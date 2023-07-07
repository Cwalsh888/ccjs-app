import { Title } from "@components";

import { Container, Summary } from "./styled";

const FunFacts = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Title>More Data</Title>
      <Summary>
        Data to parse through later:
        <ul>
          <li>Rough number of total unique volunteers</li>
          <li>Average number of unique volunteers per year</li>
          <li>Most days Jail Support ran in a row</li>
          <li>Add the percentage for each days' "fullshift" rate</li>
        </ul>
      </Summary>
    </Container>
  );
};

export default FunFacts;
