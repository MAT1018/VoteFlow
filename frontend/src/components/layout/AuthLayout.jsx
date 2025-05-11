import React from 'react';
import UI_ELEMENT from '../../assets/images/ui-element.jpg';
import CARD_1 from '../../assets/images/auth-card-1.png';
import CARD_2 from '../../assets/images/auth-card-2.png';
import CARD_3 from '../../assets/images/auth-card-3.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-screen h-screen md:w-1/2 px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Polling App</h2>
        {children}
      </div>

      {/* Right Section with Background and Cards */}
      <div
        className="hidden md:block w-1/2 h-screen bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${UI_ELEMENT})` }}
      >
        {/* Card 1 */}
        <img
          src={CARD_1}
          className="w-64 lg:w-72 absolute top-[8%] left-[10%] shadow-lg shadow-blue-400/15 rounded-xl"
          alt="Card 1"
        />

        {/* Card 3 */}
        <img
          src={CARD_3}
          className="w-64 lg:w-72 absolute top-[34%] left-[54%] shadow-lg shadow-blue-400/15 rounded-xl"
          alt="Card 3"
        />

        {/* Card 2 */}
        <img
          src={CARD_2}
          className="w-64 lg:w-72 absolute top-[80%] left-[10%] shadow-lg shadow-blue-400/15 rounded-xl"
          alt="Card 2"
        />
      </div>
    </div>
  );
};

export default AuthLayout;