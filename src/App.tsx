import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false);

    return (
        <div className="App">
            <PageTitle title={'This is accordion title'}/>
            <OnOff on={setOn} onValue={on}/>
            {/*<UncontrolledAccordion titleValue={'Title uncontrolled'}/>*/}
            {/*<UncontrolledRating />*/}

            <Accordion
                titleValue={'Accordion 1 title'}
                collapsed={accordionCollapsed}
                onchange={() => setAccordionCollapsed(!accordionCollapsed)}
            />
            <Rating value={ratingValue} onclick={setRatingValue}/>
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
