import { Title } from "../common";

import { Summary } from "./styled";

const FunFacts = () => {
  return (
    <>
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
    </>
  );
};

export default FunFacts;
