import type {Meta, StoryObj} from "@storybook/react";
import {useArgs} from "@storybook/preview-api";
import {Rating} from "./Rating";

const meta: Meta<typeof Rating> = {
    component: Rating,
    argTypes: {
      setValue: {
          action: "setValue"
      }
    },
    decorators: [
        (Story, {args}) => {
            const [, setArgs] = useArgs<typeof args>();

            const setValue = (value: typeof args.value) => {
                args.setValue(value);
                setArgs({value})
            }
            return <Story args={{...args, setValue}} />
        }
    ]
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        value: 4
    }
}
