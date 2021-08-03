import React from 'react';

import './home.scss';

class home extends React.Component {
  render() {
      const clip = "%PUBLIC_URL%/caderonas.mp4"
    return (
        <div className="clipvideo" >
            <video autoplay="autoplay" loop="none" muted >
                <source scr={clip} type="video/mp4" />
                Your browser does not support the video tag. 
            </video>
        </div>
    );
  }
}

export default home;
