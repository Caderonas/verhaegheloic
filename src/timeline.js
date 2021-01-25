import React from 'react';
import './timeline.scss';
import Timeline from './assets/Timeline.svg';

class timeline extends React.Component { 
  
  render(){
      return (
          <div className="tl">
              <img src={Timeline} className="tl-svg" alt="Timeline"/> 
          </div>
      );
  }
}

export default timeline;