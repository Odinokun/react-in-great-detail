import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <OnOff/>
            <OnOff/>
            <OnOff/>

            <PageTitle title={'This is Odinokun`s title'}/>
            <Accordion
                titleValue={'Accordion 1 title'}
                collapsed={true}
            />
            <Rating value={1}/>
            <Accordion
                titleValue={'Accordion 2 title'}
                collapsed={true}
            />
            <Rating value={3}/>
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
