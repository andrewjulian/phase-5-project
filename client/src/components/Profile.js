import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [currentUser] = useContext(UserContext);

  const { display_name, type } = currentUser;

  return (
    <div>
      <div className=" bg-white border-2 border-blue-500 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
        <div className="relative h-40 bg-blue-500"></div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12  rounded-full overflow-hidden border-4">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
          />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold">{display_name}</h1>
          <p className="text-sm text-gray-600 text-center">{type}</p>
        </div>
        <br />
        <div className="flex flex-col items-center">
          <button className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
