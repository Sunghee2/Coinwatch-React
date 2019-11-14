import React from 'react';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Sticky innerZ = {1000}>
      <div className = 'header text-left'>
        <Link className = 'header-title' to = '/' style = {{ textDecoration: 'none', color: 'white'}}>
          Coin Watch
        </Link>
      </div>
    </Sticky>
  );
};

export default Header;