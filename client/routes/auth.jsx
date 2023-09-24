import React, { useState } from 'react';
import * as comp from '../components/auth';
import '../public/assets/css/custom.css';
import myImage from '../public/assets/images/login-sign2.jpg';

function Auth() {
  const [respond, setRespond] = useState({ success: true, message: null });

  return (
    <div className="w-screen h-screen flex justify-center overflow-auto bg-spill sm:bg-spill custom-bg-sign">       
      <comp.register setRespond={setRespond} />
    </div>
  );
}

export default Auth;
