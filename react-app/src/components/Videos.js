import React from 'react';

const Videos = props => {
  return (<>
  <div>
  <p>{props.title}</p>
  <video>{props.embed}</video>
  <p>{props.date}</p>
  <p>{props.competition.name}</p>
  <p>{props.competition.url}</p>
  <p>{props.side1.name}</p>
  <p>{props.side1.url}</p>
  <p>{props.videos.title}</p>

 
  {/* <p>{props.vid.map((foobar, index) => {...foobar }</p>  */}
  </div>
  </>  );
  
};

export default Videos;
