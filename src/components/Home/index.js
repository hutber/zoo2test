import React from 'react';
import { NavLink } from 'react-router-dom'
import * as styles from './style.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <NavLink to="/home"  className={styles.index}>
        </NavLink>
      </div>
    );
  }
}

export default Home;
