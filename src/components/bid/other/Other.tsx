import React, { ReactNode, useEffect } from "react";
import { Header } from "../../../styles/components";
interface IPropsCurrent{
    titlePage:ReactNode,
}

export default function Other(props:IPropsCurrent){

  
    return(
        <>
        <Header>
            {props.titlePage}
        </Header>

        </>
    )
}