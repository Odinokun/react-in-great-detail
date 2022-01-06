import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onclick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star
                selected={props.value > 0}
                onclick={props.onclick}
                value={1}
            />
            <Star
                selected={props.value > 1}
                onclick={props.onclick}
                value={2}
            />
            <Star
                selected={props.value > 2}
                onclick={props.onclick}
                value={3}
            />
            <Star
                selected={props.value > 3}
                onclick={props.onclick}
                value={4}
            />
            <Star
                selected={props.value > 4}
                onclick={props.onclick}
                value={5}
            />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onclick: (value: RatingValueType) => void
    value: RatingValueType
}

const Star = (props: StarPropsType) => {
    return (
        <span className={'star'} onClick={() => props.onclick(props.value)}>
            {props.selected ? <b><i>star </i></b> : 'star  '}
        </span>
    )
}