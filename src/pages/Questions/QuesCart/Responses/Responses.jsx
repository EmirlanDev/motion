import React from "react";
import { useSelector } from "react-redux";

const Responses = () => {
  const { user } = useSelector((s) => s);
  return (
    <>
      <div className="responses">
        <div className="responses__title">
          <img src={user.photoURL} alt="profileImg" />
          <h4>{user.displayName}</h4>
        </div>
        <div className="responses__body">
          <h4>vghjkl;</h4>
        </div>
      </div>
      <div className="responses">
        <div className="responses__title">
          <img src={user.photoURL} alt="profileImg" />
          <h4>{user.displayName}</h4>
        </div>
        <div className="responses__body">
          <h4>vghjkl;</h4>
        </div>
      </div>
      <div className="responses">
        <div className="responses__title">
          <img src={user.photoURL} alt="profileImg" />
          <h4>{user.displayName}</h4>
        </div>
        <div className="responses__body">
          <h4>vghjkl;</h4>
        </div>
      </div>
      <div className="responses">
        <div className="responses__title">
          <img src={user.photoURL} alt="profileImg" />
          <h4>{user.displayName}</h4>
        </div>
        <div className="responses__body">
          <h4>vghjkl;</h4>
        </div>
      </div>
    </>
  );
};

export default Responses;
