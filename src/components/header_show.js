import React from 'react';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Sticky innerZ = {1000}>
      <div className = 'header text-left'>
        <p className = 'header-title'>
          <Link to = '/' style = {{ textDecoration: 'none', color: 'white'}}>
            Coin Watch
          </Link>
        </p>
      </div>
    </Sticky>
  );
};

export default Header;