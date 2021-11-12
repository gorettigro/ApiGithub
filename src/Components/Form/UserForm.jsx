import React from "react";

//Styles
import "./UserForm.css";

const UserForm = ({ handleUserName, handleSearchUser }) => {
  return (
    
      <form
        action=""
        className="w-1/2 m-auto mt-10 text-center "
        onSubmit={e => handleSearchUser(e)}
      >
        <input
          type="text"
          placeholder="User name"
          className="p-2 w-4/6 sm:p-4 sm:w-2/3 text-xs md:text-xl search-input"
          onChange={({ target }) => handleUserName(target)}
        />
        <input
          type="submit"
          value="Search"
          className="p-2 w-2/6 sm:p-4 sm:w-1/3 text-xs md:text-xl bg-black hover:bg-blue_light search-input_button"
        />
      </form>
    
  );
};

export default UserForm