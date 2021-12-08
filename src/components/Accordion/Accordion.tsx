import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onclick: (value:boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                onclick={props.onclick}
            />
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onclick: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onclick(!props.collapsed)}>
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