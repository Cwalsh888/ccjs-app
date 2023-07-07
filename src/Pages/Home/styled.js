import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100%;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-around;
  width: 100%;
  height: 85%;
  padding: 0 5em;

  @media (max-width: 425px) {
    padding: 0 1.5em;
  }
`;
