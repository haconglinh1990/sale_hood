import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const NotePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Title>Notes page</Title>
      </Main>
    </Container>
  );
};

export default NotePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;
