import React from 'react';

export default class LogoHeader extends React.Component {
  render() {
    return (<div className="flex black-background shadow z-100 header">
      <h3>vislint-vegalite-data</h3>
      <div>
        <img className="logo"
          src="./assets/tableau_white.png" />
      </div>
    </div>);
  }
}
