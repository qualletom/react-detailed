import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionType = {
  title: string;
}

export const UncontrolledAccordion = ({title}: UncontrolledAccordionType) => {
  const [state, dispatch] = useReducer(reducer, {collapsed: false});

  return (
    <div>
      <AccordionTitle onClick={() => dispatch({type: TOGGLE_COLLAPSED})} title={title}/>
      {!state.collapsed && <AccordionBody/>}
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
