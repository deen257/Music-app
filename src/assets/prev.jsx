import React from "react";

function Prev({className, onClick}) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      fill='none'
      viewBox='0 0 17 17'
    >
      <path
        fill='#fff'
        d='M14.482 4.845v6.38c0 1.306-1.42 2.126-2.554 1.473l-2.766-1.594-2.767-1.6a1.696 1.696 0 010-2.94l2.767-1.6 2.766-1.593c1.134-.653 2.554.16 2.554 1.474zM3.495 12.651a.504.504 0 01-.5-.5v-8.24c0-.273.227-.5.5-.5s.5.227.5.5v8.24c0 .274-.227.5-.5.5z'
      ></path>
    </svg>
  )
}

export default Prev;
