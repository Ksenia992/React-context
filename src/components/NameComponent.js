import * as React from 'react';
import EmailComponent from "./EmailComponent";
import { Context } from "../Context";

const NameComponent = () => {
    const { name } = React.useContext(Context);
    return (
        <>
        <h1>Name: {name || "No data"}</h1>
          <EmailComponent />
        </>

    )
}

export default NameComponent;