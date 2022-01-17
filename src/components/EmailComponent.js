import * as React from 'react';
import PhoneComponent from "./PhoneComponent";
import { Context } from "../Context";

const EmailComponent = () => {
    const { email } = React.useContext(Context);
    return (
        <>
        <h1>Email: {email || "No data"}</h1>
        <PhoneComponent />
        </>
    )
}

export default EmailComponent;