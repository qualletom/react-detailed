import React, {useState} from 'react';

type UncontrolledAccordionType = {
    title: string;
}

export const UncontrolledAccordion = ({title}: UncontrolledAccordionType) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle onClick={() => setCollapsed(!collapsed)} title={title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProps = {
    title: string;
    onClick: () => void;
}

const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {
    return <h3 onClick={onClick}>-- {title} --</h3>
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
