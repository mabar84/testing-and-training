import React from 'react';
import {Rating} from "../rating/Rating";
import {Accordion} from "../accordion/Accordion";

export const Kabzda0 = () => {
    return (
        <div>
            <Rating rating={0}/>
            <Rating rating={1}/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
            <Accordion
                items={["4", "5", "6"]}
                isCollapsed={true}
                title={"First accordion"}
            />
            <Accordion items={['7', '8', '9']} isCollapsed={false}
                       title={'Second accordion'}/>
        </div>
    );
};
