import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const todo = ({ text, updateMode, deleteToDO }) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        {/* <BiEdit className='icon icon1' onClick={updateMode} /> */}
        <AiFillDelete className='icon icon2' onClick={deleteToDO} />
      </div>
    </div>
  );
};

export default todo;
