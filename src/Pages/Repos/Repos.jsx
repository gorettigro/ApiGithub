import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
//UseParams nos trae toda la información que tenga ese objeto

//Componentes
import GithubRepos from "../../Components/Custom/GithibRepos/GithubRepos"
import Loader from "../../Components/Custom/Loader/Loader"

const Repos = () => {
    //Hooks
    const {user} = useParams();

    //State
    //const [followers, setFollowers] = useState();
    const [repos,setRepos] = useState(null);
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setRepos([]);
        setLoader(true);
        const handleUserRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            const result =await response.json();
            setRepos(result);
            console.log(result);
        };
        handleUserRepos();
        setLoader(false);
    }, []);
    
    return(
        <div>  
            
            { repos && repos.length > 0 && !loader
                ? (repos.map(user => (
                    <GithubRepos 
                        github={user?.html_url}
                        name={user?.name}
                        language={user?.language}
                        size={user?.size}
                        created_at={user?.created_at}
                        visibility={user?.visibility}
                    />
                ))
            ) : (
            <Loader />
                )}
        </div>
    );
};

export default Repos;