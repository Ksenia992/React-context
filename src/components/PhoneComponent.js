import * as React from 'react';
import { Context } from "../Context";

const PhoneComponent = () => {
    const { phone } = React.useContext(Context);
    return (
        <>
        <h1>Phone: {phone || "No data"}</h1>
        </>
    )
}

export default PhoneComponent;