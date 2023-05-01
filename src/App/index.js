import { BrowserRouter as Router } from "react-router-dom";

import NavBar from '../NavBar';
import AnimatedRoutes from "../Routes";

import {
  Container,
  PageContainer,
  Title,
} from "./styled";

const App = () => {
  
  return (
    <Container>
      <Title>Project CCJS</Title>
      <PageContainer>
        <Router>
          <AnimatedRoutes />
          <NavBar />
        </Router>
      </PageContainer>
    </Container>
  );
};

export default App;
