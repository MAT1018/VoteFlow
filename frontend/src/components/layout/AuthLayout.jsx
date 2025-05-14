import React from 'react';
import UI_ELEMENT from '../../assets/images/ui-element.jpg';
import CARD_1 from '../../assets/images/auth-card-1.png';
import CARD_2 from '../../assets/images/auth-card-2.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-screen h-screen md:w-1/2 px-12 pt-8 pb-12">
        <h2 className="text-2xl font-medium text-black ">VoteFlow</h2>
        {children}
      </div>

      {/* Right Section with Background and Cards */}
      <div
        className="hidden md:block w-1/2 h-screen bg-cover  bg-center relative"
        style={{ backgroundImage: `url(${UI_ELEMENT})`,
         backgroundSize: '95%',
         backgroundRepeat: 'no-repeat',
       }}
      >
        {/* Card 1 */}
        <img
          src={CARD_1}
          className="w-64 lg:w-80 absolute top-[10%] left-[8%] shadow-lg shadow-blue-700/15 rounded-xl"
          alt="Card 1"
        />

        {/* Card 2 */}
        <img
          src={CARD_2}
          className="w-64 lg:w-80 absolute bottom-[7%] right-[8%] shadow-lg shadow-blue-700/15 rounded-xl"
          alt="Card 2"
        />
      </div>
    </div>
  );
};

export default AuthLayout;