import type {Meta, StoryObj} from "@storybook/react";
import {OnOff} from "./OnOff";
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
    argTypes: {
      setIsActive: {
          action: "setIsActive"
      }
    },
    decorators: [
        (Story, {args}) => {
            const [, setArgs] = useArgs<typeof args>();

            const setIsActive = (isActive: typeof args.isActive) => {
                args.setIsActive(isActive);
                setArgs({isActive})
            }
            return <Story args={{...args, setIsActive}} />
        }
    ]
};

export default meta;
type Story = StoryObj<typeof OnOff>;

export const Default: Story = {
    args: {
        isActive: true
    }
}
