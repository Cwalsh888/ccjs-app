import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 0 5em;

  @media (max-width: 425px) {
    padding: 0 1.5em;
  }
`;

export const Summary = styled.div`
  font-size: 1.5em;
`;
