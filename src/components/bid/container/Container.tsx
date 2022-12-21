import React, { PropsWithChildren, useEffect } from "react";

import { Header } from "../../../styles/components";
import Current from "../current/Current";
import Other from "../other/Other";

interface IPropsContainer extends PropsWithChildren {
    cbstate?: Function,
    element?: string,
}


export default function Container(props: IPropsContainer) {
    useEffect(() => {
        if (props.cbstate) props.cbstate(props.children);
    });

    switch (props.element) {
        case "Current": return <Current titlePage={props.children} />
        case "Rules": return <Other titlePage={props.children} />
        case "Plan": return <Other titlePage={props.children} />
        case "Archive": return <Other titlePage={props.children} />
        case "Public": return <Other titlePage={props.children} />
        case "Start": return <Other titlePage={props.children} />
        default:break;
    }
    return (<>
        <Header>
            Вы на ходитесь с разделе торгов, выберите интересующий пунтк меню.
        </Header>
    </>)
}

