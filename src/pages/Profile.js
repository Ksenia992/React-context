import * as React from 'react';
import FirstTestComponent from "../components/FirstTestComponent";
import { useState } from "react";
import { Context } from "../Context.js";

const Profile = () => {
    const [profileDetails] = useState(
   JSON.parse(localStorage.getItem("token")) || ""
    );
    return (
        <Context.Provider value={profileDetails}>
        <div className="alignLeft">
        <h1 className="alignCenter">Profile</h1>
        <FirstTestComponent profileDetails={profileDetails} />
        </div>
        </Context.Provider>
    )
}

export default Profile;