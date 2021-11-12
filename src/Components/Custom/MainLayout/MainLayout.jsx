import React from "react"

//Comonents
import Header from "../Header/Header";

const MainLayout = (props) => {
    console.log(props)
    return(
        <div>
            <Header />
            {props.children}
            <style>{'body { background-color: #F6EABE; }'}</style>
        </div>
    );
};

export default MainLayout;