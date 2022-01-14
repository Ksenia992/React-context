import * as React from 'react';
import ThirdTestComponent from "./ThirdTestComponent";
import { Context } from "../Context";

const SecondTestComponent = () => {
    const contextData = React.useContext(Context);
    return (
        <>
        <h1>SecondTestComponent data: {contextData.email}, {contextData.password}</h1>
        <ThirdTestComponent />
        </>
    )
}

export default SecondTestComponent;