import React from 'react';

type AccordionType = {
    title: string;
    collapsed?: boolean;
    onTitleClick: (isCollapsed: boolean) => void
}

export const Accordion = ({title, collapsed, onTitleClick}: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={title} onClick={() => onTitleClick(!collapsed)}/>
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
