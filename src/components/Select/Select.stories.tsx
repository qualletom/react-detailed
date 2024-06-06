import type {Meta, StoryObj} from '@storybook/react';
import {ItemType, Select} from "./Select";
import {useArgs} from "@storybook/preview-api";

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
    value: 10,
    title: "Ten"
  },
  {
    value: 20,
    title: "Twenty"
  },
  {
    value: 30,
    title: "Thirty"
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
  render: WithValue.render,
  args: {

  }
}
