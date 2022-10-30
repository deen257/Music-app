import React from 'react'

function Shuffle({ className, color, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='17'
      viewBox='0 0 17 17'
    >
      <path
        fill={color}
        d='M15.488 12.018c0-.013-.006-.027-.006-.04-.007-.053-.014-.107-.034-.153a.61.61 0 00-.1-.154s0-.006-.006-.006a.517.517 0 00-.354-.147l-3.113.013h-.007c-.4 0-.786-.186-1.026-.506l-.814-1.047a.492.492 0 00-.7-.087.493.493 0 00-.086.7l.813 1.047c.433.56 1.113.893 1.82.893h.007l1.9-.006-.474.473a.503.503 0 000 .707c.1.1.227.146.354.146a.494.494 0 00.353-.146l1.333-1.334c.047-.046.08-.1.107-.16a.693.693 0 00.033-.193zM6.602 4.491a2.3 2.3 0 00-1.867-.953h-.013l-1.734.007c-.273 0-.5.226-.5.5 0 .273.227.5.5.5l1.74-.007h.007c.42 0 .813.2 1.053.54l.72 1c.1.133.254.207.407.207a.503.503 0 00.407-.793l-.72-1zM15.482 4.085c0-.014.006-.027.006-.034a.517.517 0 00-.147-.353l-1.333-1.333a.503.503 0 00-.706 0 .503.503 0 000 .706l.473.474-1.82-.007h-.013c-.767 0-1.487.38-1.914 1.027l-4.26 6.386c-.24.36-.646.58-1.08.58h-.006l-1.694-.013a.5.5 0 100 1l1.7.007h.014a2.28 2.28 0 001.913-1.027l4.26-6.387c.24-.36.647-.58 1.08-.58h.007l3.026.014a.502.502 0 00.354-.147s0-.007.006-.007c.04-.046.08-.093.1-.153.02-.047.027-.1.034-.153z'
      ></path>
    </svg>
  )
}

export default Shuffle