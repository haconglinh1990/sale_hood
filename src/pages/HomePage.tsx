import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState<{ name: string; timestamp: string }[]>([]);
  const [nameSortOrder, setNameSortOrder] = useState<'asc' | 'desc'>('asc');
  const [timeSortOrder, setTimeSortOrder] = useState<'asc' | 'desc'>('asc');

  const addItem = () => {
    if (item.trim()) {
      const currentDateTime = new Date().toLocaleString();
      setItems((prevItems) => [
        ...prevItems,
        { name: item, timestamp: currentDateTime },
      ]);
      setItem('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  const sortByName = () => {
    const sorted = [...items].sort((a, b) => {
      return nameSortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setItems(sorted);
    setNameSortOrder(nameSortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortByTimestamp = () => {
    const sorted = [...items].sort((a, b) => {
      const comparison =
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      return timeSortOrder === 'asc' ? comparison : -comparison;
    });
    setItems(sorted);
    setTimeSortOrder(timeSortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Container>
      <Header />
      <Main>
        <Title>Things to do</Title>
        <InputContainer>
          <Input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter new item"
          />
          <SubmitItemButton onClick={addItem}>Add</SubmitItemButton>
        </InputContainer>
        <PredefinedTasks />
        <HorizontalView>
          <SortButton onClick={sortByName}>
            Sort by Name ({nameSortOrder})
          </SortButton>
          <SortButton onClick={sortByTimestamp}>
            Sort by Timestamp ({timeSortOrder})
          </SortButton>
        </HorizontalView>

        <List>
          {items.map((itemObj, index) => (
            <ListItem key={index}>
              <div>
                <input type="checkbox" /> {itemObj.name}
              </div>
              <TimeView>{itemObj.timestamp}</TimeView>
            </ListItem>
          ))}
        </List>
      </Main>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubmitItemButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const PredefinedTasks = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SortButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 240px;

  &:hover {
    background-color: #5a6268;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 500px;
`;

const TimeView = styled.div`
  min-width: 90px;
`;
const HorizontalView = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
