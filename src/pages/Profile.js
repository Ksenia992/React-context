import * as React from 'react';
import NameComponent from "../components/NameComponent";
import { useState } from "react";
import { Context } from "../Context.js";

const Profile = () => {
    const [profileDetails] = useState(
   JSON.parse(localStorage.getItem("userData")) || ""
    );
    return (
        <Context.Provider value={profileDetails}>
        <div className="alignLeft">
        <h1 className="alignCenter">Profile</h1>
        <NameComponent profileDetails={profileDetails} />
        </div>
        </Context.Provider>
    )
}

export default Profile;