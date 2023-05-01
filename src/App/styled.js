import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #c3bfb5; // #3e4346 DARK MODE
  /* border: 5px solid red; */
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 75%;
  text-align: center;
  overflow-y: auto;
  /* border: 5px solid cyan; */
`;

export const Title = styled.h1`
  height: 9%;
  font-size: 3em;
  text-align: center;
  color: #613898;
  margin: 0;
  /* border: 3px solid orange; */

  @media (max-width: 425px) {
    font-size: 2em;
    height: 6%;
  }
`;