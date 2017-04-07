import React  from 'react';
import style from './_Logo.css';

const Logo = React.createClass ({
    render() {
        return (
          <h1 className={style.logo}>Logo</h1>
        );
    }
});

export default Logo;
