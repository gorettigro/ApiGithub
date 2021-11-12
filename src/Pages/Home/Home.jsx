import React, { useState } from "react";
import {Link} from "react-router-dom";

//Components
import Header from "../../Components/Custom/Header/Header";
import UserForm from "../../Components/Form/UserForm";
import GithubUser from "../../Components/Custom/GithubUser/GithubUser";
import Error from "../../Components/Custom/Error/Error";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
  //State
  const [userName, setUserName] = useState("");
  const [userInformation, setUserInformation] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);


  //Funciones
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleSearchUser = async e => {
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    setUserInformation(result);
    setLoader(false);
    if(result.login){
        setError(false);
        return;
    }else{
      setError(true);
      return;
    }
  };

  return (
    <div>
      
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />

      <div className="text-center">
        {(userInformation && !error ) ? (
          <GithubUser
            avatar={userInformation?.avatar_url}
            github={userInformation?.html_url}
            github_name={userInformation?.login }
            name={userInformation?.name}
            public_repos={userInformation?.public_repos}
            followers={userInformation?.followers}
            following={userInformation?.following}
          />
        ) : null}

        {
          (error) ? (<Error/>) : null
        }

      </div>

      {(loader)   && <Loader />}
    </div>
  );
};

export default Home;