import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)``;

export const Summary = styled.div`
  font-size: 1.5em;

  & > ul > li {
    margin-bottom: 1em;
  }
`;
