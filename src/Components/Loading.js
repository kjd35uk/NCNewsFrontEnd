import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
  <div>
    <ReactLoading type={'spinningBubbles'} color={'hotpink'} height={667} width={375} />
    </div>
);
 
export default Loading;