import React  from 'react';
import InlineSVG from 'svg-inline-react';


const Logo = React.createClass ({
    render() {
        return (
          <InlineSVG src={require("svg-inline-loader!../../../assets/Nopa_Logo.svg")} />
        );
    }
});

export default Logo;
