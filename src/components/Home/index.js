import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../shared/logo/Logo';
import * as styles from './style.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <NavLink to="/home"  className={styles.index}>
          <Logo />
        </NavLink>
      </div>
    );
  }
}

export default Home;
