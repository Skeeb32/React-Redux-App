import React from 'react';

const Videos = props => {
  return (<>
  <div>
  <p>{props.bob}</p> 
  <p>{props.vid.map((foobar, index) => foobar.embed )}</p> 
  </div>
  </>  );
  
};

export default Videos;
