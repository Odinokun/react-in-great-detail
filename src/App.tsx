import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is Odinokun`s title'}/>
            <Accordion
                titleValue={'Accordion 1 title'}
                collapsed={false}
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
