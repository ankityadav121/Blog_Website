import React, { useState } from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime]=useState(time);

    const UpdateTime=()=>{
        time= new Date().toLocaleTimeString();
        setCtime(time);
    };
   setInterval(UpdateTime,500)
  return (
  <div className='clock'>
   <h1>{ctime}</h1>
   
  </div>
  );
};

export default Clock;
