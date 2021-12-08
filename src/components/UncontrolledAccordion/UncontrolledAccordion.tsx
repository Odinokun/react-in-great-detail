import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    const onCollapsedHandler = () => setCollapsed(!collapsed)

    return (
        <>
            <AccordionTitle title={props.titleValue} onclick={() => onCollapsedHandler()}/>
            {collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onclick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onclick()}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>

    )
}