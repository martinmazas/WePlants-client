import React from "react";
import Avatar from "@material-ui/core/Avatar";

const UserInfo = ({userInfo}) => {
  console.log(userInfo);
  return (
    <div className="no-gutters">
      <div className="col-sm-6 col-md-8">
        <Avatar alt={userInfo.firstName} src='../../Images/martinFace.jpeg' />
        <h3 id="welcome_header">Welcome Back,</h3>
        <h3 id="user_header">
          {userInfo.firstName} {userInfo.lastName}
        </h3>
      </div>
    </div>
  );
};
export default UserInfo;
