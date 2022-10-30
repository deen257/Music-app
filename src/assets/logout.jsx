import React from "react";

function Logout({className}) {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="#EFEEE0"
        d="M10.535 1.833c2.276 0 4.132 1.825 4.132 4.07v4.391H9.07a.706.706 0 00-.718.706c0 .385.317.706.718.706h5.596v4.381c0 2.246-1.856 4.08-4.15 4.08H5.973c-2.285 0-4.14-1.825-4.14-4.07V5.912c0-2.254 1.865-4.079 4.15-4.079h4.551zm6.46 6.005a.7.7 0 011-.01l2.676 2.668a.7.7 0 010 1l-2.677 2.667a.71.71 0 01-.495.21.708.708 0 01-.504-1.21l1.467-1.457h-3.795v-1.412h3.795l-1.467-1.457a.708.708 0 010-1z"
        opacity="0.25"
      ></path>
    </svg>
  );
}

export default Logout;
