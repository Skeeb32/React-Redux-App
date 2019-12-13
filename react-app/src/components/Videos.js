import React from 'react';


const Videos = props => {
  return (<>
  <div>
  <p>{props.title}</p>
  <p>{props.embed}</p>
  <a href={props.url}>LINK 1</a>
  <p>{props.thumbnail}</p>
  <p>{props.date}</p> 
  <p>{props.side1.name}</p>
  <a href={props.side1.url}>LINK 2</a>
  <p>{props.side2.name}</p>
  <a href={props.side2.url}>LINK 3</a>
  <p>{props.competition.name}</p>
  <p>{props.competition.id}</p>
  <a href={props.competition.url}>LINK 4</a>
  <p>{props.videos[0].title}</p>
  <p>{props.videos[0].embed}</p>

 
  {/* <p>{props.vid.map((foobar, index) => {...foobar }</p>  */}
  </div>
  </>  );
  
};

export default Videos;
