import React from 'react'
import { getInitials } from '../../utils/helper'

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-black font-bold bg-white`}>
      {getInitials(fullName || "")} 
    </div>
  );
};

export default CharAvatar

// import React from 'react';
// import { getInitials } from '../../utils/helper';

// const CharAvatar = ({ fullName, width, height, style }) => {
//   const initials = getInitials(fullName || "");

//   console.log("CharAvatar → fullName:", JSON.stringify(fullName));
//   console.log("CharAvatar → initials:", initials);

//   return (
//     <div
//       className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-black font-bold bg-white`}
//     >
//       {initials || "?"}
//     </div>
//   );
// };

// export default CharAvatar;