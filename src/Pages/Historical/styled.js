import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  /* border: 5px solid purple; */
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
  /* border: 10px solid blue; */
  padding-bottom: 10%;
`;

export const FlexItems = styled.div`
  flex: 1 0 14%;
  border: 1px solid black;
  background-color: ${(props) => props.color || "#9C83BF"};

  @media (max-width: 425px) {
    font-size: 0.73em;
  }
`;

export const Loading = styled.div`
  font-size: 4em;
`;
