import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [selectedFile, setSelectedFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [errors, setErrors] = useState([]);

  const { display_name, type } = currentUser;

  function handleSubmit(e) {
    e.preventDefault();

    const userId = currentUser.id;

    const formData = new FormData();

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    fetch(`/users/${userId}`, {
      method: "PATCH",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        res.json().then((newUser) => {
          setCurrentUser(newUser);
          setErrors([]);
          setUpdateProfile(!updateProfile);
        });
      } else {
        res.json().then(() => setErrors(["Must be jpeg or png"]));
      }
    });
  }

  if (updateProfile === true) {
    return (
      <div>
        <div className=" bg-white border-2 border-blue-500 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
          <div className="relative h-40 bg-blue-500"></div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12  rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src={
                currentUser.image
                  ? currentUser.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="user's avatar"
            />
          </div>
          <div className="mt-16">
            <h1 className="text-lg text-center font-semibold">
              {display_name}
            </h1>
            <p className="text-sm text-gray-600 text-center">{type}</p>
          </div>
          <br />
          <div className=" pl-2 pr-2 flex flex-col items-center">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="avatar"> Upload Picture - .JPEG or .PNG </label>
              <input
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <br />
              <button
                type="submit"
                className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Upload
              </button>
              <br />
              <button
                onClick={() => setUpdateProfile(!updateProfile)}
                className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Back to Profile
              </button>
              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" bg-white border-2 border-blue-500 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
        <div className="relative h-40 bg-blue-500"></div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12  rounded-full overflow-hidden border-4">
          <img
            className="object-cover w-full h-full"
            src={
              currentUser.image
                ? currentUser.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="user's avatar"
          />
        </div>
        <div className="mt-16">
          <h1 className="text-lg text-center font-semibold">{display_name}</h1>
          <p className="text-sm text-gray-600 text-center">{type}</p>
        </div>
        <br />
        <div className="flex flex-col items-center">
          <button
            onClick={() => setUpdateProfile(!updateProfile)}
            className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Update Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
