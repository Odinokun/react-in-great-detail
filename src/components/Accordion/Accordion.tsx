import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onchange: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                onchange ={props.onchange}
            />
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onchange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onchange}>
            {props.title}
        </h3>
    )
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