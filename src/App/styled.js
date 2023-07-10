import styled from "styled-components";
import { QueryClientProvider } from 'react-query';

export const Container = styled(QueryClientProvider)`
  width: 100%;
  height: 100%;
  padding: 1em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #c3bfb5; // #3e4346 DARK MODE
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  overflow-y: auto;
`;

export const Title = styled.h1`
  height: 9%;
  font-size: 3em;
  text-align: center;
  color: #613898;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 2em;
    height: 6%;
  }
`;