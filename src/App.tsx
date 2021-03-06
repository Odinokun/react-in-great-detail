import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <PageTitle title={'This is controlled accordion'}/>
            <OnOff on={switchOn} onchange={setSwitchOn}/>
            <Accordion
                titleValue={'Accordion 1 title'}
                collapsed={accordionCollapsed}
                onchange={() => setAccordionCollapsed(!accordionCollapsed)}
            />
            <Rating value={ratingValue} onclick={setRatingValue}/>
            <br/>
            <hr/>
            <br/>
            <PageTitle title={'This is controlled accordion'}/>
            <UncontrolledOnOff />
            <UncontrolledAccordion titleValue={'Title uncontrolled'}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}

export default App;
