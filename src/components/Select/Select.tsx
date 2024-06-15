import {KeyboardEvent, memo, useEffect, useState} from "react";
import s from './Select.module.css';

export type ItemType = {
  title: string;
  value: number | string;
  [key: string]: any;
}

type SelectType = {
  value?: number | string;
  onChange: (value: any) => void;
  items: ItemType[];
  labelValue: string;
}

export const Select = memo(({value, labelValue, onChange, items}: SelectType) => {
  console.log("RENDER SELECT " + labelValue);
  const [expanded, setExpanded] = useState(false);
  const [hoveredOptionValue, setHoveredOptionValue] = useState(value);
  const activeOption = items.find((item) => item.value === value);

  const changeValue = (value: number | string) => {
    onChange(value);
  }

  const handleItemClick = (value: number | string) => () => {
    changeValue(value);
    toggleOptions();
  }

  const toggleOptions = () => {
    setExpanded(!expanded)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape" && expanded) {
      setExpanded(false);
    }

    if (e.key === "Enter") {
      toggleOptions();
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      for (let i = 0; i < items.length; i++) {
        if (hoveredOptionValue === items[i].value) {
          const nextElemIndex = e.key === "ArrowUp" ? i - 1 : i + 1;

          if (items[nextElemIndex] !== undefined) {
            changeValue(items[nextElemIndex].value);

            return
          }
        }
      }

      if (!value && items.length) {
        onChange(items[0].value);
      }
    }
  }

  useEffect(() => {
    setHoveredOptionValue(value);
  }, [value])

  return (
    <div
      className={s.container}
      onKeyDown={handleKeyDown}
    >
      <span className={s.label}>{labelValue}</span>
      <div
        tabIndex={0}
        className={s.valueContainer}
        onClick={toggleOptions}
      >
        {activeOption?.title}
      </div>
      {expanded &&
          <div className={`${s.options}`}>
              <ul>
                {items.map((item, index) =>
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredOptionValue(item.value)}
                    onClick={handleItemClick(item.value)}
                    className={`${s.option} ${item.value === hoveredOptionValue ? s.selected : ''}`}
                  >{item.title}</li>
                )}
              </ul>
          </div>
      }
    </div>
  );
});
