import React from 'react';
import './App.css';
// import {Accordion} from "./components/Accordion/Accordion";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <OnOff/>
            <UncontrolledAccordion titleValue={'Title #1'}/>
            <UncontrolledRating />

            {/*<PageTitle title={'This is Odinokun`s title'}/>
            <Accordion
                titleValue={'Accordion 1 title'}
                collapsed={true}
            />
            <Rating value={1}/>
            <Accordion
                titleValue={'Accordion 2 title'}
                collapsed={true}
            />
            <Rating value={3}/>*/}
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
