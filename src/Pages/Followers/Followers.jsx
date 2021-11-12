import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
//UseParams nos trae toda la información que tenga ese objeto

//Componentes
import GithubUser from "../../Components/Custom/GithubUser/GithubUser"
import Loader from "../../Components/Custom/Loader/Loader"

const Followers = () => {
    //Hooks
    const {user} = useParams();

    //State
    const [followers, setFollowers] = useState();
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setFollowers([]);
        setLoader(true);
        const handleUserFollowers = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/followers`);
            const result =await response.json();
            setFollowers(result);
            console.log(result);
        };
        handleUserFollowers();
        setLoader(false);
    }, []);
    
    return(
        <div>
            
            { followers && followers.length > 0 && !loader
                ? (followers.map(user => (
                    <GithubUser 
                        avatar={user.avatar_url ? user.avatar_url : null}
                        github={user?.html_url}
                        github_name={user?.login}
                    />
                ))
            ) : (
        <Loader/>
    )};
        </div>
    );
};

export default Followers;