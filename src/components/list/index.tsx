import React from 'react';
import { Container, Item } from './list.style';

interface IList {
  data: object[];
}

const List: React.FC<IList> = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => 
      <Item key={index} >
        {item}
      </Item>
      )}
    </Container>
  );
}

export default List;