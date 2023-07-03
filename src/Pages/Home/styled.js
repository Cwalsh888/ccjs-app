import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  /* border: 5px solid red; */
  height: 100%;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-around;
  width: 100%;
  height: 85%;
  /* border: 10px solid blue; */
`;

export const Loading = styled.div`
  font-size: 4em;
`;
