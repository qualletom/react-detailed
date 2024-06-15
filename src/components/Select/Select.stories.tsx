import type {Meta, StoryObj} from '@storybook/react';
import {ItemType, Select} from "./Select";
import {useArgs} from "@storybook/preview-api";
import {useMemo, useState} from "react";

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    onChange: {
      action: 'click'
    }
  },
};

const items: ItemType[] = [
  {
    value: 1,
    title: "Minsk",
    countryId: 1,
    population: 8.8
  },
  {
    value: 2,
    title: "Homel",
    countryId: 1,
    population: 7.5
  },
  {
    value: 3,
    title: "Moscow",
    countryId: 2,
    population: 15
  },
  {
    value: 4,
    title: "London",
    countryId: 3,
    population: 27
  },
  {
    value: 5,
    title: "Manchester",
    countryId: 3,
    population: 6
  }
]

export default meta;
type Story = StoryObj<typeof Select>;

export const WithValue: Story = {
  render: (args) => {
    const [, setArgs] = useArgs<typeof args>();

    const handleSelectChangeValue = (value: typeof args.value) => {
      args.onChange(value);
      setArgs({value})
    }

    return (
      <Select
        value={args.value}
        items={items}
        onChange={handleSelectChangeValue}
        labelValue={"Age"}
      />)
  },
  args: {
    value: items[0].value
  }
}

export const WithoutValue: Story = {
  render: WithValue.render
}

export const TestMemoization = () => {
  const [counter, setCounter] = useState(0);
  const [value1, setValue1] = useState(items[0].value);
  const [value2, setValue2] = useState(items[0].value);
  const [value3, setValue3] = useState(items[0].value);

  const items2 = useMemo(() => items.filter(item => item.countryId === 2), []);
  const items3 = useMemo(() => items.filter(item => item.population > 10), []);


  return (
    <>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>increase counter</button>
      <Select onChange={setValue1} value={value1} items={items} labelValue={'All items'}/>
      <Select onChange={setValue2} value={value2} items={items2} labelValue={'Items with countryId = 2'}/>
      <Select onChange={setValue3} value={value3} items={items3} labelValue={'Items with population > 10'}/>
    </>
  )
}
