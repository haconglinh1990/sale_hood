import React from 'react';
import styled from 'styled-components';

const PredefinedTasks: React.FC = () => {
  return (
    <Container>
      <PredefinedTask>Buy groceries</PredefinedTask>
      <PredefinedTask>Finish project report</PredefinedTask>
      <PredefinedTask>Call the electrician</PredefinedTask>
      <PredefinedTask>Book doctor appointment</PredefinedTask>
    </Container>
  );
};

export default PredefinedTasks;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const PredefinedTask = styled.div`
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;
