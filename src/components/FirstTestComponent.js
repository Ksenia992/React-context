import * as React from 'react';
import SecondTestComponent from "./SecondTestComponent";
import { Context } from "../Context";

const FirstTestComponent = () => {
    const contextData = React.useContext(Context);
    return (
        <>
        <h1>FirstTestComponent data: {contextData.email}, {contextData.password}</h1>
          <SecondTestComponent />
        </>

    )
}

export default FirstTestComponent;