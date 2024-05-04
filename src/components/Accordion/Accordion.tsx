import React from 'react';

type AccordionType = {
    title: string;
    collapsed?: boolean;
}

export const Accordion = ({title, collapsed}: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProps = {
    title: string;
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
    return <h3>-- {title} --</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
