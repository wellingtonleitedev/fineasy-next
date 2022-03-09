import React from 'react';
import { Container } from './header.style';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Fineasy</h1>
      <div>
        <input name="mode" type="checkbox" />
        <label>Dark Mode</label>
      </div>
    </Container>
  );
}

export default Header;